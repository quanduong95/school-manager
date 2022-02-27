const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController')
const productController = require('../app/controllers/ProductController')

//create a new product page
router.get('/create', productController.create);

//store the product 
router.post('/store', productController.store);

//update a product 
router.put('/update/:id', productController.update);

//delete a product
router.delete('/delete/:id', productController.delete);

//list of all products
router.get('/', productsController.index);

//get a product with a specific keyword
router.get('/:slug', productController.index);




module.exports = router;