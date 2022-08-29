import { pipe } from 'pipe-ts'
import { useCallback } from 'react'

type UnknownFunction = (...params: readonly unknown[]) => unknown

type NextFun<From, To, Subs extends readonly unknown[]> =
  | ((from: From) => To)
  | readonly [(...from: readonly [...Subs, From]) => To, ...Subs]

type FirstFun<
  Args extends readonly unknown[],
  Subs extends readonly unknown[],
  Result
> =
  | ((...a: Args) => Result)
  | (readonly [(...a: Args) => Result, ...Subs] &
      readonly [(...a: Args) => Result, ...Partial<Args>])

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  Asubs extends readonly unknown[]
>(
  ab: FirstFun<Aargs, Asubs, B>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => B

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => C

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => D

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  E,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = [],
  Dsubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>,
  de: NextFun<D, E, Dsubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => E

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  E,
  F,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = [],
  Dsubs extends readonly unknown[] = [],
  Esubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>,
  de: NextFun<D, E, Dsubs>,
  ef: NextFun<E, F, Esubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => F

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  E,
  F,
  G,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = [],
  Dsubs extends readonly unknown[] = [],
  Esubs extends readonly unknown[] = [],
  Fsubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>,
  de: NextFun<D, E, Dsubs>,
  ef: NextFun<E, F, Esubs>,
  fg: NextFun<F, G, Fsubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => G

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = [],
  Dsubs extends readonly unknown[] = [],
  Esubs extends readonly unknown[] = [],
  Fsubs extends readonly unknown[] = [],
  Gsubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>,
  de: NextFun<D, E, Dsubs>,
  ef: NextFun<E, F, Esubs>,
  fg: NextFun<F, G, Fsubs>,
  gh: NextFun<G, H, Gsubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => H

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = [],
  Dsubs extends readonly unknown[] = [],
  Esubs extends readonly unknown[] = [],
  Fsubs extends readonly unknown[] = [],
  Gsubs extends readonly unknown[] = [],
  Hsubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>,
  de: NextFun<D, E, Dsubs>,
  ef: NextFun<E, F, Esubs>,
  fg: NextFun<F, G, Fsubs>,
  gh: NextFun<G, H, Gsubs>,
  hi: NextFun<H, I, Hsubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => I

export function usePipe<
  Aargs extends readonly [...Asubs, ...unknown[]],
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  Asubs extends readonly unknown[] = [],
  Bsubs extends readonly unknown[] = [],
  Csubs extends readonly unknown[] = [],
  Dsubs extends readonly unknown[] = [],
  Esubs extends readonly unknown[] = [],
  Fsubs extends readonly unknown[] = [],
  Gsubs extends readonly unknown[] = [],
  Hsubs extends readonly unknown[] = [],
  Isubs extends readonly unknown[] = []
>(
  ab: FirstFun<Aargs, Asubs, B>,
  bc: NextFun<B, C, Bsubs>,
  cd: NextFun<C, D, Csubs>,
  de: NextFun<D, E, Dsubs>,
  ef: NextFun<E, F, Esubs>,
  fg: NextFun<F, G, Fsubs>,
  gh: NextFun<G, H, Gsubs>,
  hi: NextFun<H, I, Hsubs>,
  ij: NextFun<I, J, Isubs>
): (...args: Aargs extends [...Asubs, ...infer Rest] ? Rest : []) => J

export function usePipe(
  ...fns: readonly [UnknownFunction | readonly [UnknownFunction, ...unknown[]]]
): UnknownFunction {
  return useCallback(
    pipe(
      ...(fns.map((fn) => (typeof fn === 'function' ? fn : subst(...fn))) as [
        UnknownFunction
      ])
    ),
    fns.flat()
  )
}

function subst<Subs extends unknown[], Args extends unknown[], Return>(
  fn: (...args: [...Subs, ...Args]) => Return,
  ...subs: Subs
) {
  return (...args: Args) => fn(...subs, ...args)
}
