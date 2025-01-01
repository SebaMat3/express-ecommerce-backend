//api/db/config.js
const { config } = require('../config/config');

// Prioritize explicit DATABASE_URL over internal URL
const URI = process.env.DATABASE_URL || process.env.RAILWAY_INTERNAL_URL;
console.log('Using Database URL:', URI); // Debug log

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};

