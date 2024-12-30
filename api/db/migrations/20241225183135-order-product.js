//api/db/migrations/20241225183135-order-product.js
'use strict';

const { ORDER_PRODUCT_TABLE, OrderProductSchema } = require('./../models/order-product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};
