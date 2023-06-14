/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 3.7, 4.2), 8);
      assert.strictEqual(calculateNumber('SUM', -1.8, 0.2), -2);
      assert.strictEqual(calculateNumber('SUM', 0.5, 0.5), 2);
      assert.strictEqual(calculateNumber('SUM', 2.2, -3.9), -2);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 4.2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.8, 0.2), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, -3.9), 6);
    });
  });

  describe('type: DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 4), 2.5);
      assert.strictEqual(calculateNumber('DIVIDE', 7, 2), 3.5);
      assert.strictEqual(calculateNumber('DIVIDE', -9, 3), -3);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.5), 1);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 7, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -9, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});
