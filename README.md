# use-pipe-ts

[![npm](https://img.shields.io/npm/v/use-pipe-ts)](https://npm.im/use-pipe-ts)
[![build](https://github.com/iyegoroff/use-pipe-ts/workflows/build/badge.svg)](https://github.com/iyegoroff/use-pipe-ts/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/use-pipe-ts/workflows/publish/badge.svg)](https://github.com/iyegoroff/use-pipe-ts/actions/workflows/publish.yml)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/use-pipe-ts)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/use-pipe-ts?label=min+gzip)](https://bundlephobia.com/package/use-pipe-ts)
[![npm](https://img.shields.io/npm/l/use-pipe-ts.svg?t=1495378566925)](https://www.npmjs.com/package/use-pipe-ts)

Pipe-based useCallback react hook

## Getting started

`$ npm i use-pipe-ts`

## Overview

```js
export function usePipe(...fns) {
  return useCallback(
    pipe(...fns.map((fn) => (typeof fn === 'function' ? fn : subst(...fn)))),
    fns.flat()
  )
}

function subst(fn, ...subs) {
  return (...args) => fn(...subs, ...args)
}
```

## Usage

See [test](/test/index.spec.tsx)
