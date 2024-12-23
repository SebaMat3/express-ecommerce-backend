//routes/index.js
const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const purchasesRouter = require('./purchases.router');
const customersRouter = require('./customers.router');

//http://localhost:3000/api/v1
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/purchases', purchasesRouter);
  router.use('/customers', customersRouter);
}

module.exports = routerApi;
