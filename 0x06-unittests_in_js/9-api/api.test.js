/* eslint-disable */
const request = require('request');
const expect = require('chai').expect;

describe('API Tests', () => {
  describe('Index Page', () => {
    it('should return status code 200', (done) => {
      request.get('http://localhost:7865/', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result', (done) => {
      request.get('http://localhost:7865/', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart Page', () => {
    it('should return status code 200 when :id is a number', (done) => {
      const cartId = 123;
      request.get(`http://localhost:7865/cart/${cartId}`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return status code 400 when :id is not a number', (done) => {
      const cartId = 'abc';
      request.get(`http://localhost:7865/cart/${cartId}`, (error, response) => {
        expect(response.statusCode).to.equal(400);
        done();
      });
    });

    // Add more tests for the cart page
  });
});

