var hasProperty = function(propertyName, object) {
  return (
    // Immutable API
    (
      object.has &&
      typeof object.has === 'function' &&
      object.has(propertyName)
    ) ||
    // Plain Object API
    (object.hasOwnProperty(propertyName))
  );
};

[
  'definition',
  'field',
  'reference',
  'use'
].forEach(function(type) {
  exports[type] = hasProperty.bind(this, type);
});

exports.subForm = hasProperty.bind(this, 'form');

exports.form = hasProperty.bind(this, 'content');

exports.text = function(argument) {
  return typeof argument === 'string';
};

exports.version = '0.1.0';
