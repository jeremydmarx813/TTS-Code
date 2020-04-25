var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;    
var should = chai.should(); 
var anohter = require('../app/javascript/another');


assert.typeOf(another.sayHello, 'string');