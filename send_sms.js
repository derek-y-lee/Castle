// Twilio portion:
require('dotenv').config()
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is from send_sms.js',
     from: process.env.twilio_no, // this is the Twilio number you're assigned in your Twilio account
     to: process.env.derek_no // phone number of msg recipient
   })
  .then(message => console.log(message.sid));
