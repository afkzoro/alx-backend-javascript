/* eslint-disable */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 3.7, 4.2)).to.equal(8);
      expect(calculateNumber('SUM', -1.8, 0.2)).to.equal(-2);
      expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
      expect(calculateNumber('SUM', 2.2, -3.9)).to.equal(-2);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 3.7, 4.2)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.8, 0.2)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 2.2, -3.9)).to.equal(6);
    });
  });

  describe('type: DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 10, 4)).to.equal(2.5);
      expect(calculateNumber('DIVIDE', 7, 2)).to.equal(3.5);
      expect(calculateNumber('DIVIDE', -9, 3)).to.equal(-3);
      expect(calculateNumber('DIVIDE', 1, 0.5)).to.equal(1);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -9, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
  });

  it('should throw an error for an invalid type', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});
