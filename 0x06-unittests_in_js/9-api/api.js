/* eslint-disable */
const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
 console.log(`API available on localhost port ${port}`);
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Invalid cart ID');
  }
  res.send(`Payment methods for cart ${id}`);
});

module.exports = app;
