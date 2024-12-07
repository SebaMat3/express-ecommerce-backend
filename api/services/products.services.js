//services/products.services.js
const { faker }  = require('@faker-js/faker');
const boom = require('@hapi/boom');


class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate () {
    const limit = 50;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const { name, price, image} = data;
    const newProduct = {
      id: faker.string.uuid(),
      name,
      price,
      image,
    }
    this.products.push(newProduct);
    return newProduct
  }

  find() {
    return new Promise ((resolve, reject) => {
			setTimeout(() => {
				resolve(this.products);
			}, 2000);
		})
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id)
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
   return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const updatedProduct = this.products[index];
    this.products[index]= {
      ...updatedProduct,
      ...changes
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
