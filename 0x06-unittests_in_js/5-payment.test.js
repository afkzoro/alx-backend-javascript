/* eslint-disable */
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message to the console for totalAmount = 100 and totalShipping = 20', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should log the correct message to the console for totalAmount = 10 and totalShipping = 10', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 20');
  });
});
