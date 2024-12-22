//api/db/migrations/20241221035054-change-user-id.js
'use strict';

const { DataTypes } = require('sequelize');
const { CustomerSchema, CUSTOMER_TABLE} = require('./../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    } )
  },

  async down (queryInterface) {

  }
};
