const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: 'AZcTKE3NDpm7-KmuvKroHRaCTNzizNvwL5B09Hqb0G1z4iZ7MyP9tuq42m2uMGdW6JbdODnw7fzxnzTy', // or 'your_live_client_id'
  client_secret: 'EFKQ30QpXMG1GOSroB1b7CVzqHMAW5gooYfGfW6lUPiK_ENqjDks9JgT6xfcJPbzbi8Lt5uewA_CBhGE' // or 'your_live_client_secret'
});

module.exports = paypal;
