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

const updateContentType = async (body, contentId) => {
  const { newField } = body;
  const updatedContentType = await ContentType.update(
    { fields: newField }, { where: { id: contentId }, returning: true },
  );
  return updatedContentType;
};

const createAnInstance = async (body, collectionId) => {
  const { newInstances } = body;
  const createdInstance = await ContentType.update(
    { instances: newInstances }, { where: { id: collectionId }, returning: true },
  );
  return createdInstance;
};

const updateFieldInstance = async (body, contentId) => {
  const { newFields, newInstances } = body;
  const updatedContentType = await ContentType.update(
    { fields: newFields, instances: newInstances }, { where: { id: contentId }, returning: true },
  );
  return updatedContentType;
};

const updateInstance = async (body, contentId) => {
  const { newInstances } = body;
  const updatedInstance = await ContentType.update(
    { instances: newInstances }, { where: { id: contentId }, returning: true },
  );
  return updatedInstance;
};

// const getAllCollections= async()=> {
//   const allCollections= await
// }

// const getDemos = async () => {
//   const demos = await Demo.findAll();
//   // console.log(todos);
//   return demos;
// };

module.exports = {
  createContentType,
  getAllContentTypes,
  updateContentType,
  createAnInstance,
  updateFieldInstance,
  updateInstance,
};
