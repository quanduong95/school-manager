const Product = require('../models/Product');
const {arrayToObject} = require('../../utils/toObjectHandlers')


class ProductsController{
    
    //GET /product
    index(req, res, next) {
        Product.find({})
            .then(products => {
                // res.render('productsRelated/products', { products: arrayToObject(products) });
                
                //return json
                res.json(products);
            })
            .catch(next);
    }
}

module.exports = new ProductsController();