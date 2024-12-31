//api/libs/sequelize.js

const { Sequelize } = require('sequelize');
require('dotenv').config();
const { config } = require('./../config/config');
const { setupModels } = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : console.log,
}

if (config.isProd) {
  options.dialectOptions = {
	  ssl : {
		  require : true
	}
}


const sequelize = new Sequelize (config.dbUrl, options)

setupModels(sequelize);

module.exports = sequelize;
