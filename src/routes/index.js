const productsRouter = require('./products');
const accountsRouter = require('./accounts');

const homeRouter = require('./home');


function route(app) {
    app.use('/products', productsRouter);
    app.use('/accounts', accountsRouter);
    app.use('/', homeRouter);
}
module.exports = route;