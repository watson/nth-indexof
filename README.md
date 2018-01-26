# nth-indexof

Find the nth position of a pattern in a string.

Similar to `str.indexOf(pattern)` except that you can choose how many
occurrences of `pattern` you wish to skip before getting the index.

[![Build status](https://travis-ci.org/watson/nth-indexof.svg?branch=master)](https://travis-ci.org/watson/nth-indexof)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install nth-indexof --save
```

## Usage

```js
const indexOf = require('nth-indexof')

const text = 'foo\nbar\nbaz'

console.log('The index of the 2nd linebreak is:', indexOf(text, '\n', 1)) // => 7
```

## API

### `index = indexOf(haystack, needle[, skip][, offset])`

Returns the index of the `needle` in the `haystack` ignoring the first
`skip` occurrences indicated.

Arguments:

- `haystack` - A string in which to search
- `needle` - The string to search for
- `skip` - Optional number of instances of `needle` to skip before finding the
  next index (default: `0`)
- `offset` - Optional offset in the `haystack` from where to start the
  search

Returns `-1` if no match is found.

## License

MIT
