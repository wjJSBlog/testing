const {
  assert
} = require("chai");

const {
  add,
  mul
} = require("../src/math");

describe('#math', function () {
  describe('#add()', function () {
    it('should return 5 when 2+3', function () {
      assert.equal(add(2 , 3), 5);
    });
  });

  describe('#mul()', function () {
    it('should return 5 when 8-3', function () {
      assert.equal(mul(8, 3), 5);
    });
  });
});