const express = require('express');
// const { testHandler, createDemoHandler } = require('../handlers/test.handler');
const {
  createContentTypeHandler, getAllContentTypesHandler,
  updateContentTypeHandler, createInstanceHandler,
  updateFieldInstanceHandler, updateInstanceHandler,
} = require('../handlers/cms.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');
// const {
//   postValidator,
// } = require('../validations/test.validator');

const cmsRouter = express.Router();

// cmsRouter.get('/', authenticateJwt, testHandler);
// cmsRouter.post('/', postValidator, authenticateJwt, createDemoHandler);
cmsRouter.post('/', authenticateJwt, createContentTypeHandler);
cmsRouter.get('/', authenticateJwt, getAllContentTypesHandler);
cmsRouter.post('/update/:id', authenticateJwt, updateFieldInstanceHandler);
cmsRouter.patch('/instance/:id', authenticateJwt, createInstanceHandler);
cmsRouter.put('/:id', authenticateJwt, updateContentTypeHandler);
cmsRouter.patch('/updateinstance/:id', authenticateJwt, updateInstanceHandler);

// cmsRouter.get('/all', authenticateJwt, getAllCollectionsHandler);

module.exports = { cmsRouter };
