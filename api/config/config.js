//api/config/config.js
require('dotenv').config();

const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	dbUser: process.env.PG_USER,
	dbPassword: process.env.PG_PASS,
	dbHost: process.env.DB_HOST,
	dbName: process.env.PG_DB,
	dbPort: process.env.DB_PORT,
}

module.exports = { config };
