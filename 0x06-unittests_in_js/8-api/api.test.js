/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Assuming the API code is in api.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('API', () => {
  describe('GET /', () => {
    it('should return status code 200', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should return the correct result', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });

    // Add more tests for any additional requirements
  });
});
