var has = require('has')

;['blank', 'definition', 'reference', 'use', 'component']
  .forEach(function (type) {
    exports[type] = hasProperty(type)
  })

exports.link = function (argument) {
  return (
    has(argument, 'link') &&
    (
      argument.link.indexOf('https://') === 0 ||
      argument.link.indexOf('http://') === 0
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
