/* jshint mocha: true */
var Immutable = require('immutable');
var expect = require('chai').expect;
var validate = require('commonform-validate');

var predicate = require('..');

var immutable = function(argument) {
  return Immutable.fromJS(argument);
};

describe('predicate', function() {
  describe('definition', function() {
    it('is a function', function() {
      expect(predicate.definition)
        .to.be.a('function');
    });

    it('returns true for a valid definition', function() {
      var argument = {definition: 'Term'};
      expect(validate.definition(argument))
        .to.be.true();
      expect(predicate.definition(argument))
        .to.be.true();
      expect(predicate.definition(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid definition', function() {
      var argument = {invalid: 'object'};
      expect(validate.definition(argument))
        .to.be.false();
      expect(predicate.definition(argument))
        .to.be.false();
      expect(predicate.definition(immutable(argument)))
        .to.be.false();
    });
  });

  describe('use', function() {
    it('is a function', function() {
      expect(predicate.use)
        .to.be.a('function');
    });

    it('returns true for a valid use', function() {
      var argument = {use: 'Term'};
      expect(validate.use(argument))
        .to.be.true();
      expect(predicate.use(argument))
        .to.be.true();
      expect(predicate.use(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid use', function() {
      var argument = {term: 'Term'};
      expect(validate.use(argument))
        .to.be.false();
      expect(predicate.use(argument))
        .to.be.false();
      expect(predicate.use(immutable(argument)))
        .to.be.false();
    });
  });

  describe('reference', function() {
    it('is a function', function() {
      expect(predicate.reference)
        .to.be.a('function');
    });

    it('returns true for a valid reference', function() {
      var argument = {reference: 'Term'};
      expect(validate.reference(argument))
        .to.be.true();
      expect(predicate.reference(argument))
        .to.be.true();
      expect(predicate.reference(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid reference', function() {
      var argument = {invalid: 'object'};
      expect(validate.reference(argument))
        .to.be.false();
      expect(predicate.reference(argument))
        .to.be.false();
      expect(predicate.reference(immutable(argument)))
        .to.be.false();
    });
  });

  describe('field', function() {
    it('is a function', function() {
      expect(predicate.field)
        .to.be.a('function');
    });

    it('returns true for a valid field', function() {
      var argument = {field: 'Value'};
      expect(validate.field(argument))
        .to.be.true();
      expect(predicate.field(argument))
        .to.be.true();
      expect(predicate.field(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid field', function() {
      var argument = {invalid: 'object'};
      expect(validate.field(argument))
        .to.be.false();
      expect(predicate.field(argument))
        .to.be.false();
      expect(predicate.field(immutable(argument)))
        .to.be.false();
    });
  });

  describe('subForm', function() {
    it('is a function', function() {
      expect(predicate.subForm)
        .to.be.a('function');
    });

    it('returns true for a valid sub-form', function() {
      var argument = {
        summary: 'Summary',
        form: {
          content: ['Text']
        }
      };
      expect(validate.nestedSubForm(argument))
        .to.be.true();
      expect(predicate.subForm(argument))
        .to.be.true();
      expect(predicate.subForm(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid sub-form', function() {
      var argument = {invalid: 'object'};
      expect(validate.subForm(argument))
        .to.be.false();
      expect(predicate.subForm(argument))
        .to.be.false();
      expect(predicate.subForm(immutable(argument)))
        .to.be.false();
    });
  });

  describe('text', function() {
    it('is a function', function() {
      expect(predicate.text)
        .to.be.a('function');
    });

    it('returns true for text', function() {
      var argument = 'Text';
      expect(predicate.text(argument))
        .to.be.true();
      expect(predicate.text(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid definition', function() {
      var argument = null;
      expect(predicate.text(argument))
        .to.be.false();
      expect(predicate.text(immutable(argument)))
        .to.be.false();
    });
  });
});
