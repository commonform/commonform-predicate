var has = function(key) {
  return function(argument) {
    return argument.hasOwnProperty(key);
  };
};

['blank', 'definition', 'reference', 'use'].forEach(function(type) {
  exports[type] = has(type);
});

exports.child = has('form');

exports.form = has('content');

exports.text = require('is-string');

exports.version = '1.0.0-rc1';
