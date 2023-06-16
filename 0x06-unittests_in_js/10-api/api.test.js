/* eslint-disable */
const request = require('request');
const { expect } = require('chai');

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

    it('should return status code 404 when :id is not a number', (done) => {
      const cartId = 'abc';
      request.get(`http://localhost:7865/cart/${cartId}`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('should return "Payment methods for cart :id"', (done) => {
      const cartId = 123;
      request.get(`http://localhost:7865/cart/${cartId}`, (error, response, body) => {
        expect(body).to.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    // Add more tests for the cart page
  });

  describe('Login Page', () => {
    it('should return status code 200 and welcome message', (done) => {
      const userName = 'JohnDoe';
      request.post('http://localhost:7865/login', { form: { userName } }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      });
    });

    // Add more tests for the login page
  });

  describe('Available Payments', () => {
    it('should return status code 200 and payment methods object', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });

    // Add more tests for the available payments
  });
});
