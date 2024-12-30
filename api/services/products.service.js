//services/products.services.js
const boom = require('@hapi/boom');
const {Op} = require('sequelize');

const { models } = require( '../libs/sequelize');
const { where } = require('sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }


  async generate () {
    //...
  }

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct;
  }

  async find(query) {
    const options = {
      include : ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const { price } = query;
    if (query.price) {
      options.where.price = price;
    }
    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        // [Op.gte]: price_min,
        // [Op.lte]: price_max
        [Op.between]: [price_min, price_max]
      };
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
   return product;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const res = await model.update(changes);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { res: true };
  }

}

module.exports = ProductsService;
