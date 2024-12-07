//routes/categories.router.js

// imports of Modules
const express = require('express');
const CategoriesService = require('../services/categories.services');

// instace of class
const router = express.Router();
const service = new CategoriesService();

// routing
router.get("/", (req, res) => {
  const categories = service.find();
  res.status(200).json(categories);
})


router.get('/:id', (req, res) => {
  const id = req.params.id;
  const category = service.findOne(id);
  if(category){
    res.status(200).json(category);
  } else {
    res.status(404).json({
      message: 'Not Found'
    })
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
})

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updataCategory = service.update(id, body);
  res.status(200).json(updataCategory);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deleteCategory = service.delete(id);
  res.status(200).json(deleteCategory);
})

module.exports = router;
