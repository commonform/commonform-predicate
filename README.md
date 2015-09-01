```javascript
var predicate = require('commonform-predicate');
var assert = require('assert');

var invalid = {invalid: 'object'};
var validForm = {
  content: ['Valid text']
};

assert(predicate.definition({definition: 'Term'}))
assert(!predicate.definition(invalid))

assert(predicate.use({use: 'Term'}))
assert(!predicate.use({term: 'Term'}))

assert(predicate.reference({reference: 'Term'}))
assert(!predicate.reference(invalid))

assert(predicate.blank({blank: 'Value'}))
assert(!predicate.blank(invalid))

assert(predicate.child({headuing: 'Summary', form: validForm}))
assert(!predicate.child(invalid))

assert(predicate.text('Text'))
assert(!predicate.text(null))
```
