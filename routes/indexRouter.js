const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controller/indexController')

indexRouter.get('/', indexController.fetchAllProducts);
indexRouter.get('/product/id/:id', indexController.fetchProductInfo);
indexRouter.get('/product/id/:id/updateProduct', indexController.updateProductGet);
indexRouter.post('/product/id/:id/updateProduct', indexController.updateProductPost)

module.exports = indexRouter;