// const authService = require('../services/auth.service');
const cmsServices = require('../services/cms.service');

// const testHandler = async (req, res) => {
//   // const token = req.headers.authorization.split(' ')[1];
//   try {
//     const allDemos = await demoServices.getDemos();
//     const replyObj = {
//       userInformation: req.userInformation,
//       allDemos,
//     };
//     // const reply = `${req.user}${allDemos}`;

//     // res.status(200).send(req.user);
//     // console.log('username');
//     // console.log(req.user);
//     // console.log(reply);
//     return res.status(200).send(replyObj);
//     // res.status(200).send({ message: 'test handler run successfully' });
//   } catch (error) {
//     return res.status(500).send();
//   }
// };

// const createDemoHandler = async (req, res) => {
//   const { body } = req;
//   const createdDemo = await demoServices.createDemo(body);
//   const replyObj = {
//     userInformation: req.userInformation,
//     createdDemo,
//   };
//   // console.log(body);
//   if (createdDemo.length === 0) return res.status(400).send('Failed to create demo');
//   res.status(201).send(replyObj);
// };

const createContentTypeHandler = async (req, res) => {
  const { body } = req;
  const createdContentType = await cmsServices.createContentType(body);
  const replyObj = {
    userInformation: req.userInformation,
    createdContentType,
  };
  // console.log(body);
  if (createdContentType.length === 0) return res.status(400).send('Failed to create content type');
  res.status(201).send(replyObj);
};

const getAllContentTypesHandler = async (req, res) => {
  // const { body } = req;
  const allContentTypes = await cmsServices.getAllContentTypes();
  const replyObj = {
    userInformation: req.userInformation,
    allContentTypes,
  };
  // console.log(body);
  if (allContentTypes.length === 0) return res.status(400).send('No Content Types');
  res.status(200).send(replyObj);
};

const updateContentTypeHandler = async (req, res) => {
  const contentId = req.params.id;
  console.log(contentId);
  const { body } = req;
  console.log(body);
  const updatedContent = await cmsServices.updateContentType(body, contentId);
  console.log(updatedContent);
  // const mockValue = [
  //   1,
  // ];

  // const failedMockValue = [
  //   0,
  // ];
  // if (updatedToDo.toString() === failedMockValue.toString()) {
  //   // console.log('here');
  //   return res.status(400).send('Failed to update todo');
  // }
  res.status(200).send(updatedContent);
};

// const getAllCollectionsHandler = async (req, res) => {
//   // const { body } = req;
//   const allCollections = await cmsServices.getAllCollections();
//   const replyObj = {
//     userInformation: req.userInformation,
//     allContentTypes,
//   };
//   // console.log(body);
//   if (allContentTypes.length === 0) return res.status(400).send('No Content Types');
//   res.status(200).send(replyObj);
// };

const createInstanceHandler = async (req, res) => {
  const collectionId = req.params.id;
  console.log(collectionId);
  const { body } = req;
  console.log(body);
  const createdInstance = await cmsServices.createAnInstance(body, collectionId);
  console.log(createdInstance);
  // const mockValue = [
  //   1,
  // ];

  // const failedMockValue = [
  //   0,
  // ];
  // if (updatedToDo.toString() === failedMockValue.toString()) {
  //   // console.log('here');
  //   return res.status(400).send('Failed to update todo');
  // }
  res.status(200).send(createdInstance);
};

const updateFieldInstanceHandler = async (req, res) => {
  const contentId = req.params.id;
  const { body } = req;
  console.log('here');
  console.log(body);
  const updatedContent = await cmsServices.updateFieldInstance(body, contentId);

  res.status(200).send(updatedContent);
};

const updateInstanceHandler = async (req, res) => {
  const contentId = req.params.id;
  const { body } = req;
  console.log('here');
  console.log(body);
  const updatedContent = await cmsServices.updateInstance(body, contentId);
  res.status(200).send(updatedContent);
};

module.exports = {
  createContentTypeHandler,
  getAllContentTypesHandler,
  updateContentTypeHandler,
  createInstanceHandler,
  updateFieldInstanceHandler,
  updateInstanceHandler,
};
