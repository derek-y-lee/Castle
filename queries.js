const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'castle',
  password: process.env.DBPASSWORD,
  port: 5432,
})
