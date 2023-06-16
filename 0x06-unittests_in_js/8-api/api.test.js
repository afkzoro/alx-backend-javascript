/* eslint-disable */
const request = require('request');
const expect = require('chai').expect;

describe('Index Page', () => {
  // Tests for the index page

  describe('GET /', () => {
    it('should return status code 200', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct result', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    // Add more tests for any additional requirements
  });
});
