//schemas/products.schema.js
const Joi = require ('joi');

//isolated reusable fields
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

//schemas
const createProductSchema = Joi.object({
	name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
	name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
	id: id.required(),
});


module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
}
