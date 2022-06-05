var has = require('has')

;['blank', 'definition', 'reference', 'use', 'component']
  .forEach(function (type) {
    exports[type] = hasProperty(type)
  })

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
