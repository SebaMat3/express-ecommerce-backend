//services/products.services.js

const boom = require('@hapi/boom');


const { models } = require( '../libs/sequelize');

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

  async find() {
    const products = await models.Product.findAll({
      include : ['category']
    });
    return products
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
