const { Router } = require('express');
const categoryRouter = Router();
const categoryController = require('../controller/categoryController');

categoryRouter.get('/id/:id', categoryController.fetchCategoryInfo);
categoryRouter.get('/id/:id/updateCategory', categoryController.updateCategoryGet);
categoryRouter.post('/id/:id/updateCategory', categoryController.updateCategoryPost);
categoryRouter.post('/id/:id/deleteCategory', categoryController.deleteCategory);
categoryRouter.get('/addCategory', categoryController.addACategoryGet);
categoryRouter.post('/addCategory', categoryController.addACategoryPost);

module.exports = categoryRouter;
