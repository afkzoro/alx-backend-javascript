/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(availablePayments);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});



module.exports = app;
