//libs/postgres.pool.js
const { Pool } = require("pg");
//const { host, port } = require("pg/lib/defaults");
require('dotenv').config();

const pool = new Pool ({
    host: process.env.PG_HOST || 'localhost',
    port: 5432,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASS
  });


module.exports = pool;
