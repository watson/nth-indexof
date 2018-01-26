'use strict'

var test = require('tape')
var indexOf = require('./')

var cases = [
  // various skip values
  ['!a!b!!c!d!', '!', 0, undefined, 0],
  ['!a!b!!c!d!', '!', 1, undefined, 2],
  ['!a!b!!c!d!', '!', 2, undefined, 4],
  ['!a!b!!c!d!', '!', 3, undefined, 5],
  ['!a!b!!c!d!', '!', 4, undefined, 7],
  ['!a!b!!c!d!', '!', 5, undefined, 9],
  ['!a!b!!c!d!', '!', 6, undefined, -1],

  // offset
  ['!a!b!!c!d!', '!', 0, 2, 2],
  ['!a!b!!c!d!', '!', 1, 2, 4],
  ['!a!b!!c!d!', '!', 2, 2, 5],
  ['!a!b!!c!d!', '!', 3, 2, 7],
  ['!a!b!!c!d!', '!', 4, 2, 9],
  ['!a!b!!c!d!', '!', 5, 2, -1],

  // not found
  ['!a!b!!c!d!', '?', 0, undefined, -1],

  // negative skip
  ['!a!b!!c!d!', '!', -1, undefined, 0],
  ['!a!b!!c!d!', '?', -1, undefined, -1]
]

cases.forEach(function (testCase) {
  test(function (t) {
    t.equal(indexOf.apply(null, testCase), testCase[4])
    t.end()
  })
})
