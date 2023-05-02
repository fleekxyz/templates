# it-pushable

[![Build Status](https://github.com/alanshaw/it-pushable/actions/workflows/js-test-and-release.yml/badge.svg?branch=master)](https://github.com/alanshaw/it-pushable/actions/workflows/js-test-and-release.yml)
[![Dependencies Status](https://david-dm.org/alanshaw/it-pushable/status.svg)](https://david-dm.org/alanshaw/it-pushable)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> An iterable that you can push values into

## Install

```sh
npm install it-pushable
```

## Usage

```js
import { pushable } from 'it-pushable'

const source = pushable()

setTimeout(() => source.push('hello'), 100)
setTimeout(() => source.push('world'), 200)
setTimeout(() => source.end(), 300)

const start = Date.now()

for await (const value of source) {
  console.log(`got "${value}" after ${Date.now() - start}ms`)
}
console.log(`done after ${Date.now() - start}ms`)

/*
Output:
got "hello" after 105ms
got "world" after 207ms
done after 309ms
*/
```

```js
import { pushableV } from 'it-pushable'
import all from 'it-all'

const source = pushableV()

source.push(1)
source.push(2)
source.push(3)
source.end()

console.info(await all(source))
/*
Output:
[ [1, 2, 3] ]
*/
```

## API

### `pushable([options])`

Create a new async iterable. The values yielded from calls to `.next()` or when used in a `for await of` loop are "pushed" into the iterable. Returns an async iterable object with the following additional methods:

* `.push(value)` - push a value into the iterable. Values are yielded from the iterable in the order they are pushed. Values not yet consumed from the iterable are buffered
* `.end([err])` - end the iterable after all values in the buffer (if any) have been yielded. If an error is passed the buffer is cleared immediately and the next iteration will throw the passed error
* `.readableLength` - a number that represents the size of the queue. if `objectMode` is true, this is the number of objects in the queue, if false it's the total number of bytes in the queue

`options` is an _optional_ parameter, an object with the following properties:

* `onEnd` - a function called after _all_ values have been yielded from the iterator (including buffered values). In the case when the iterator is ended with an error it will be passed the error as a parameter.
* `objectMode` - a boolean value that means non-`Uint8Array`s will be passed to `.push`, default: `false`

### `pushableV([options])`

Similar to `pushable`, except it yields multiple buffered chunks at a time. All values yielded from the iterable will be arrays.

## Related

* [`it-pipe`](https://www.npmjs.com/package/it-pipe) Utility to "pipe" async iterables together

## Contribute

Feel free to dive in! [Open an issue](https://github.com/alanshaw/it-pushable/issues/new) or submit PRs.

## License

[MIT](LICENSE) © Alan Shaw
