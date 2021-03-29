const { ContentType } = require('../models');
// const NonExistentError = require('../errors/nonExistentError');

const createContentType = async (body) => {
  const { name } = body;
  const { fields } = body;
  // const status = body.status || 'Active';

  const createdContentType = await ContentType.create({
    name,
    fields,
  });
  return createdContentType;
};

const getAllContentTypes = async () => {
  const allContentTypes = await ContentType.findAll();
  return allContentTypes;
};

// const getDemos = async () => {
//   const demos = await Demo.findAll();
//   // console.log(todos);
//   return demos;
// };

module.exports = {
  createContentType, getAllContentTypes,
};
