const Product = require('../models/Product');
const {singleToObject} = require('../../utils/toObjectHandlers')


class ProductController{
    
    //GET /products/:slug
    index(req, res, next) {
        let value = req.params.slug;
        Product.findOne({ slug: value })
            .then(product => {
                // res.render('productsRelated/product', { product: singleToObject(product) });
                
                res.json(product);

            })
            .catch(next);

    }
    //GET /product/create
    create(req, res, next) {
        res.send();
    }
    //POST /product/store
    store(req, res, next) {
        let product = new Product(req.body);
        product.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(error => {
                
            });
    }
    //PUT /products/update/:id
    update(req, res, next) {
        let id = req.params.id;
        Product.findByIdAndUpdate({ _id: id }, req.body)
            .then(() => {
                Product.findOne({ _id: id }).then((newProduct) => {
                    res.send('UPDATED\n' + newProduct);
                })
            })
            .catch(next);
    }
    //DELETE /products/delete/:id
    delete(req, res, next) {
        let id = req.params.id;
        Product.findByIdAndRemove({ _id: id })
            .then(() => {
                res.send('DELETED');
            })
            .catch(next);
    }
}

module.exports = new ProductController();