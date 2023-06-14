/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    // Test case 1: a = 1.4, b = 2.6
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);

    // Test case 2: a = 3.7, b = 4.2
    assert.strictEqual(calculateNumber(3.7, 4.2), 8);

    // Test case 3: a = -1.8, b = 0.2
    assert.strictEqual(calculateNumber(-1.8, 0.2), -2);

    // Test case 4: a = 0.5, b = 0.5
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);

    // Test case 5: a = 2.2, b = -3.9
    assert.strictEqual(calculateNumber(2.2, -3.9), -2);
  });
});
