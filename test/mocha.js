const {
  assert
} = require("chai");

const {
  add,
  mul
} = require("../src/math");

assert.equal(add(2 , 3), 5);

assert.equal(mul(8, 3), 5);