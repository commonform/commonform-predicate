var has = function (key) {
  return function (argument) {
    return argument.hasOwnProperty(key)
  }
}

var types = ['blank', 'definition', 'reference', 'use']

types.forEach(function (type) {
  exports[type] = has(type)
})

exports.child = has('form')

exports.component = has('repository')

exports.form = has('content')

exports.text = function (argument) {
  return typeof argument === 'string'
}
