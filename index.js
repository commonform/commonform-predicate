var has = require('has')

;['blank', 'definition', 'reference', 'use'].forEach(function (type) {
  exports[type] = hasProperty(type)
})

exports.child = hasProperty('form')

exports.component = hasProperty('repository')

exports.form = hasProperty('content')

exports.text = function (argument) {
  return typeof argument === 'string'
}

function hasProperty (key) {
  return function (argument) {
    return has(argument, key)
  }
}
