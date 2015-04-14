/* jshint mocha: true */
var expect = require('chai').expect;
var predicate = require('..');

var invalid = {invalid: 'object'};
var validForm = {
  content: ['Valid text']
};

describe('predicate', function() {
  describe('definition', function() {
    it('is a function', function() {
      expect(predicate.definition).to.be.a('function');
    });

    it('returns true for a valid definition', function() {
      var argument = {definition: 'Term'};
      expect(predicate.definition(argument)).to.equal(true);
    });

    it('returns false for an invalid definition', function() {
      expect(predicate.definition(invalid)).to.equal(false);
    });
  });

  describe('use', function() {
    it('is a function', function() {
      expect(predicate.use).to.be.a('function');
    });

    it('returns true for a valid use', function() {
      expect(predicate.use({use: 'Term'})) .to.equal(true);
    });

    it('returns false for an invalid use', function() {
      expect(predicate.use({term: 'Term'})).to.equal(false);
    });
  });

  describe('reference', function() {
    it('is a function', function() {
      expect(predicate.reference).to.be.a('function');
    });

    it('returns true for a valid reference', function() {
      expect(predicate.reference({reference: 'Term'})).to.equal(true);
    });

    it('returns false for an invalid reference', function() {
      expect(predicate.reference(invalid)).to.equal(false);
    });
  });

  describe('blank', function() {
    it('is a function', function() {
      expect(predicate.blank).to.be.a('function');
    });

    it('returns true for a valid blank', function() {
      expect(predicate.blank({blank: 'Value'})).to.equal(true);
    });

    it('returns false for an invalid blank', function() {
      expect(predicate.blank(invalid)).to.equal(false);
    });
  });

  describe('child', function() {
    it('is a function', function() {
      expect(predicate.child).to.be.a('function');
    });

    it('returns true for a valid child', function() {
      var argument = {heading: 'Summary', form: validForm};
      expect(predicate.child(argument)).to.equal(true);
    });

    it('returns false for an invalid child', function() {
      expect(predicate.child(invalid)).to.equal(false);
    });
  });

  describe('text', function() {
    it('is a function', function() {
      expect(predicate.text).to.be.a('function');
    });

    it('returns true for text', function() {
      expect(predicate.text('Text')).to.equal(true);
    });

    it('returns false for an invalid definition', function() {
      expect(predicate.text(null)).to.equal(false);
    });
  });
});
