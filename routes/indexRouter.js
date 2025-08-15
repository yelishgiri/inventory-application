const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controller/indexController')

indexRouter.get('/', indexController.fetchAll);

// product routes
indexRouter.get('/product/id/:id', indexController.fetchProductInfo);
indexRouter.get('/product/id/:id/updateProduct', indexController.updateProductGet);
indexRouter.post('/product/id/:id/updateProduct', indexController.updateProductPost);
indexRouter.post('/product/id/:id/deleteProduct', indexController.deleteProduct);


// category routes
indexRouter.get('/category/id/:id', indexController.fetchCategoryInfo);
indexRouter.get('/category/id/:id/updateCategory', indexController.updateCategoryGet);
indexRouter.post('/category/id/:id/updateCategory', indexController.updateCategoryPost);
indexRouter.post('/category/id/:id/deleteCategory', indexController.deleteCategory);


module.exports = indexRouter;



// neeed to refactor this file in the end so that each rotues have their own controllers