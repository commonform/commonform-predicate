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
  'insertion',
  'reference',
  'use'
].forEach(function(type) {
  exports[type] = hasProperty.bind(this, type);
});

exports.inclusion = hasProperty.bind(this, 'form');

exports.form = hasProperty.bind(this, 'content');

exports.text = function(argument) {
  return typeof argument === 'string';
};

exports.version = '0.2.0';
