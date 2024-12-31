//api/config/config.js
require('dotenv').config();

const config = {
	env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
	port: process.env.PORT || 3000,
	dbUser: process.env.PGUSER,
	dbPassword: process.env.PGPASSWORD,
	dbHost: process.env.PGHOST,
	dbPort: process.env.PGPORT,
	dbName: process.env.PGDATABASE,
  dbUrl: process.env.DATABASE_URL,
}

module.exports = { config };

