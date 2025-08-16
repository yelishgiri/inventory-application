const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controller/indexController')

indexRouter.get('/', indexController.fetchAll);


module.exports = indexRouter;

