require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'
NODE_TLS_REJECT_UNAUTHORIZED=0

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
//
// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction,
// })
const constring = process.env.URI

const pool = new Pool({
  connectionString : constring,
  ssl:true
})
pool.connect();

module.exports = { pool }
<<<<<<< HEAD
=======


// // Twilio portion:
// const accountSid = process.env.accountSid;
// const authToken = process.env.authToken;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: process.env.twilio_no,
//      to: process.env.derek_no
//    })
//   .then(message => console.log(message.sid));
>>>>>>> origin/master
