import React from 'react'
import { render } from '@testing-library/react'
import { usePipe } from '../src'

describe('use-pipe-ts', () => {
  test('should pipe nine functions', () => {
    const inc = (num: number) => num + 1

    const Result = () => {
      const inc9 = usePipe(inc, inc, inc, inc, inc, inc, inc, inc, inc)

      return <div data-testid='result'>{inc9(0)}</div>
    }

    const { getByTestId } = render(<Result />)

    expect(getByTestId('result').textContent).toEqual('9')
  })

  test('should pipe various functions', () => {
    const concat = (first: string, second: string) => `${first}${second}`
    const length = (str: string) => str.length
    const inc = (num: number) => num + 1

    const Result = () => {
      const foo = usePipe(concat, length, inc)

      return <div data-testid='result'>{foo('test', 'foo')}</div>
    }

    const { getByTestId } = render(<Result />)

    expect(getByTestId('result').textContent).toEqual('8')
  })

  test('should substitute arguments', () => {
    const foo = (num: number, bool: boolean, str: string) => `${num}${bool}${str}`

    const Result = () => {
      const foo3 = usePipe([foo, 1], [foo, 2, true], [foo, 3, false])

      return <div data-testid='result'>{foo3(false, 'foo')}</div>
    }

    const { getByTestId } = render(<Result />)

    expect(getByTestId('result').textContent).toEqual('3false2true1falsefoo')
  })

  test('should keep returned function identity between renders unless arguments changed', () => {
    const foo = (num: number, bool: boolean, str: string) => `${num}${bool}${str}`
    const foos: (typeof foo)[] = []

    const Result = ({ arg }: { arg: number }) => {
      const foo3 = usePipe(foo, [foo, arg, true], [foo, 3, false])

      foos.push(foo3)

      return <div data-testid='result'>{foo3(1, false, 'foo')}</div>
    }

    const { getByTestId, rerender } = render(<Result arg={2} />)

    const result = getByTestId('result')

    expect(result.textContent).toEqual('3false2true1falsefoo')

    rerender(<Result arg={2} />)
    expect(result.textContent).toEqual('3false2true1falsefoo')

    rerender(<Result arg={2} />)
    expect(result.textContent).toEqual('3false2true1falsefoo')

    rerender(<Result arg={22} />)
    expect(result.textContent).toEqual('3false22true1falsefoo')

    expect(foos[0]).toEqual(foos[1])
    expect(foos[1]).toEqual(foos[2])
    expect(foos[2]).not.toEqual(foos[3])
  })
})
