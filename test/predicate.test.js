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
      expect(validate.definition(immutable(argument)))
        .to.be.true();
      expect(predicate.definition(argument))
        .to.be.true();
      expect(predicate.definition(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid definition', function() {
      var argument = {invalid: 'object'};
      expect(validate.definition(immutable(argument)))
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
      expect(validate.use(immutable(argument)))
        .to.be.true();
      expect(predicate.use(argument))
        .to.be.true();
      expect(predicate.use(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid use', function() {
      var argument = {term: 'Term'};
      expect(validate.use(immutable(argument)))
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
      expect(validate.reference(immutable(argument)))
        .to.be.true();
      expect(predicate.reference(argument))
        .to.be.true();
      expect(predicate.reference(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid reference', function() {
      var argument = {invalid: 'object'};
      expect(validate.reference(immutable(argument)))
        .to.be.false();
      expect(predicate.reference(argument))
        .to.be.false();
      expect(predicate.reference(immutable(argument)))
        .to.be.false();
    });
  });

  describe('insertion', function() {
    it('is a function', function() {
      expect(predicate.insertion)
        .to.be.a('function');
    });

    it('returns true for a valid insertion', function() {
      var argument = {insertion: 'Value'};
      expect(validate.insertion(immutable(argument)))
        .to.be.true();
      expect(predicate.insertion(argument))
        .to.be.true();
      expect(predicate.insertion(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid insertion', function() {
      var argument = {invalid: 'object'};
      expect(validate.insertion(immutable(argument)))
        .to.be.false();
      expect(predicate.insertion(argument))
        .to.be.false();
      expect(predicate.insertion(immutable(argument)))
        .to.be.false();
    });
  });

  describe('inclusion', function() {
    it('is a function', function() {
      expect(predicate.inclusion)
        .to.be.a('function');
    });

    it('returns true for a valid inclusion', function() {
      var argument = {
        heading: 'Summary',
        form: {
          content: ['Text']
        }
      };
      expect(validate.nestedInclusion(immutable(argument)))
        .to.be.true();
      expect(predicate.inclusion(argument))
        .to.be.true();
      expect(predicate.inclusion(immutable(argument)))
        .to.be.true();
    });

    it('returns false for an invalid sub-form', function() {
      var argument = {invalid: 'object'};
      expect(validate.inclusion(immutable(argument)))
        .to.be.false();
      expect(predicate.inclusion(argument))
        .to.be.false();
      expect(predicate.inclusion(immutable(argument)))
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
