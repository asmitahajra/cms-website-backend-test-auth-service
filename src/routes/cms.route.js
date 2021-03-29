const express = require('express');
// const { testHandler, createDemoHandler } = require('../handlers/test.handler');
const { createContentTypeHandler, getAllContentTypesHandler } = require('../handlers/cms.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');
// const {
//   postValidator,
// } = require('../validations/test.validator');

const cmsRouter = express.Router();

// cmsRouter.get('/', authenticateJwt, testHandler);
// cmsRouter.post('/', postValidator, authenticateJwt, createDemoHandler);
cmsRouter.post('/', authenticateJwt, createContentTypeHandler);
cmsRouter.get('/', authenticateJwt, getAllContentTypesHandler);

module.exports = { cmsRouter };
