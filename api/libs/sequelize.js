//api/libs/sequelize.js

const { Sequelize } = require('sequelize');
require('dotenv').config();
const { config } = require('./../config/config');
const { setupModels } = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : console.log,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
}

// Log the configuration (temporary for debugging)
console.log('Database URL:', config.dbUrl);
console.log('Is Production:', config.isProd);
console.log('Connection Options:', JSON.stringify(options, null, 2));


const sequelize = new Sequelize (config.dbUrl, options)

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successfully established.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

setupModels(sequelize);

module.exports = sequelize;
