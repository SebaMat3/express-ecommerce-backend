//libs/postgres.js

const { Client } = require("pg");
require('dotenv').config();

async function getConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {
      rejectUnauthorized: false
    } : false
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
