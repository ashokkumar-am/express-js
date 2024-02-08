const express = require('express')
// const CategoryController = require('../controllers/categoryController');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Category Testing' });
  });

// router.get('/', CategoryController.findAll);
// router.get('/:id', CategoryController.findOne);
// router.post('/', CategoryController.create);
// router.patch('/:id', CategoryController.update);
// router.delete('/:id', CategoryController.destroy);

module.exports = router;