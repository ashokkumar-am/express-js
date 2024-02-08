const express = require('express')
// const BlogController = require('../controllers/blogController');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Blog Testing' });
  });

// router.get('/', BlogController.findAll);
// router.get('/:id', BlogController.findOne);
// router.post('/', BlogController.create);
// router.patch('/:id', BlogController.update);
// router.delete('/:id', BlogController.destroy);

module.exports = router;