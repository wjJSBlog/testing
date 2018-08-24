const {should, expect, assert} = require("chai");
const  {add, mul} = require("../src/math");

should();
add(2,3).should.equal(5);
expect(add(2,3)).to.equal(5);
assert.equal(add(2,3), 5);

