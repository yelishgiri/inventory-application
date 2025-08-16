const { Router } = require('express');
const productRouter = Router();
const productController = require('../controller/productController');

productRouter.get('/id/:id', productController.fetchProductInfo);
productRouter.get('/id/:id/updateProduct', productController.updateProductGet);
productRouter.post('/id/:id/updateProduct', productController.updateProductPost);
productRouter.post('/id/:id/deleteProduct', productController.deleteProduct);
productRouter.get('/addProduct', productController.addAProductGet);
productRouter.post('/addProduct', productController.addAProductPost);


module.exports = productRouter;
