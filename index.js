'use strict'

module.exports = indexOf

function indexOf (haystack, needle, skip, offset) {
  skip = skip || 0
  let hits = 0

  offset = haystack.indexOf(needle, offset)
  if (offset === -1) return offset
  hits++

  while (hits <= skip) {
    offset = haystack.indexOf(needle, offset + 1)
    if (offset === -1) return offset
    hits++
  }

  return offset
}
