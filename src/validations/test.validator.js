/* eslint-disable no-unused-vars */

// const createProjectValidator = (req, res, next) => {
//   const { body } = req;
//   const validate = createProjectSchema.validate(body);
//   if (validate.error) {
//     return res.status(400).json({ message: 'Invalid body' });
//   }
//   next();
// };

const {
  postBodySchema, updateBodySchema, getParamsSchema, deleteQuerySchema,
} = require('./test.schema');

const postValidator = (req, res, next) => {
  const { body } = req;
  const { value, error } = postBodySchema.validate(body);
  if (error) {
    return res.status(400).json({ message: 'Invalid body' });
    // res.status(400).send('Bad Request!');
    // return;
  }
  next();
};
  // const updateValidator = (req, res, next) => {
  //   const { body } = req;
  //   const { value, error } = updateBodySchema.validate(body);
  //   if (error) {
  //     return res.status(400).send('Bad Request!');
  //   }
  //   next();
  // };
  // const getValidator = (req, res, next) => {
  //   const { params } = req;
  //   const { value, error } = getParamsSchema.validate(params);
  //   if (error) {
  //     return res.status(400).send('Bad Request!');
  //   }
  //   next();
  // };

// const deleteValidator = (req, res, next) => {
//   const { query } = req;
//   const { value, error } = deleteQuerySchema.validate(query);
//   if (error) {
//     return res.status(400).send('Bad Request!');
//   }
//   next();
// };

module.exports = {
  postValidator,
};
