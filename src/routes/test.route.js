const express = require('express');
const { testHandler, createDemoHandler } = require('../handlers/test.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');
const {
  postValidator,
} = require('../validations/test.validator');

const testRouter = express.Router();

testRouter.get('/', authenticateJwt, testHandler);
testRouter.post('/', postValidator, authenticateJwt, createDemoHandler);

module.exports = { testRouter };
