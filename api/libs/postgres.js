const { Client } = require("pg");
const { host, port } = require("pg/lib/defaults");
require('dotenv').config();

async function getConnection() {
  const client = new Client({
    host: process.env.PG_HOST || 'localhost',
    port: 5432,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASS
  });

  await client.connect();
  return client;

}

module.exports = getConnection;
