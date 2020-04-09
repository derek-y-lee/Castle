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


const constring = 'postgres://egyexggwyrpmdu:0162839b85fd5ed5054834084bdd526700afa706a029009c772ac95f4bbb10b9@ec2-52-71-85-210.compute-1.amazonaws.com:5432/d4ooudnj98rnf7'

const pool = new Pool({
  connectionString : constring,
  ssl:true
})
pool.connect();

module.exports = { pool }
