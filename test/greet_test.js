'use strict';

var expect = require('chai').expect;
var greet = require('../greet.js');

describe('greeting concat', function() {
  it('Should return hello + an inputed name', function() {
    expect(greet('test')).is.eql('Hello test');
  });
});
