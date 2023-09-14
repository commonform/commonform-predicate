```javascript
var predicate = require('commonform-predicate')
```

The exported functions can be used to find the type of a `content` array element in a known-valid form, to avoid doing all that's necessary to ensure validity.

If you a know a form object is valid, and need to pick out specific content elements, use `commonform-predicate`, not `commonform-validate`.

```javascript
var assert = require('assert')

var invalid = { invalid: 'object' }
var validForm = { content: ['Valid text'] }

assert(predicate.definition({ definition: 'Term' }))
assert(!predicate.definition(invalid))

assert(predicate.use({ use: 'Term' }))
assert(!predicate.use({ term: 'Term' }))

assert(predicate.reference({ reference: 'Term' }))
assert(!predicate.reference(invalid))

assert(predicate.blank({ blank: 'Value' }))
assert(!predicate.blank(invalid))

assert(predicate.link({ link: 'https://example.com' }))
assert(predicate.link({ link: 'http://example.com' }))
assert(!predicate.link(invalid))

assert(predicate.child({ heading: 'Summary', form: validForm }))
assert(!predicate.child(invalid))

assert(predicate.component({
  heading: 'Warranty Disclaimer',
  component: 'https://commonform.org/kemitchell/orthodox-software-copyright-license',
  version: '1.0.0',
  substitutions: {
    terms: {
      Licensor: 'Vendor',
      Licensee: 'Customer',
      Program: 'Software'
    },
    headings: {
      'Express Warranties': 'Guarantees'
    }
  }
}))

assert(predicate.text('Text'))
assert(!predicate.text(null))
```
