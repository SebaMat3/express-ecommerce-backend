//api/db/migrations/20241223143827-category-products.js
'use strict';
const { CategorySchema, CATEGORY_TABLE} = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE} = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
  }

};
