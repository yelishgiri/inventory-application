const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controller/indexController')

indexRouter.get('/', indexController.fetchAllProducts);


module.exports = indexRouter;