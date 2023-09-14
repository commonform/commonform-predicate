var has = require('has')

;['blank', 'definition', 'reference', 'use', 'component']
  .forEach(function (type) {
    exports[type] = hasProperty(type)
  })

exports.url = function (argument) {
  return (
    has(argument, 'url') &&
    (
      argument.url.indexOf('https://') === 0 ||
      argument.url.indexOf('http://') === 0
    )
  )
}

exports.child = hasProperty('form')

exports.form = hasProperty('content')

exports.text = function (argument) {
  return typeof argument === 'string'
}

function hasProperty (key) {
  return function (argument) {
    return has(argument, key)
  }
}
