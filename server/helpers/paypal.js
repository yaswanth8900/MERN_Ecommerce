const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: 'your_sandbox_client_id', // or 'your_live_client_id'
  client_secret: 'your_sandbox_client_secret' // or 'your_live_client_secret'
});

module.exports = paypal;
