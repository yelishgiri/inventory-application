const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controller/indexController')

indexRouter.get('/', indexController.fetchAllProducts);
indexRouter.get('/id/:id', indexController.fetchProductInfo);

module.exports = indexRouter;