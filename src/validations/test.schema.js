const joi = require('joi');

const postBodySchema = joi.object().keys({
  status: joi.string().valid('Inactive', 'Active'),
  title: joi.string().required(),
  // id: joi.number(),
});

// const updateBodySchema = joi.object().keys({
//   description: joi.string().required(),
//   status: joi.string().required(),
// });
// const getParamsSchema = joi.object().keys({
//   id: joi.number(),
// });

// const deleteQuerySchema = joi.object().keys({
//   status: joi.valid('incomplete', 'complecte').required(),
// });

// const putValidationSchema = joi.object().keys({
//   names: joi.array().items(joi.string()).required(),
// });

module.exports = {
  postBodySchema,
};
