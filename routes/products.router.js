//routes/products.router.js
const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.services');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/products.schema');


const service = new ProductsService();


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
   res.send('Yo soy un filter');
  }
);

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);

    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) =>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({newProduct});
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) =>{
  try {
    const { id } = req.params;
    const body = req.body;
    const productUpdate = await service.update(id, body);
    res.json({
      id,
      message: 'updated',
      productUpdate,
    })
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const productDelete = await service.delete(id);
  res.json({
    message: 'deleted',
    productDelete,
  })
});

module.exports = router;
