// const authService = require('../services/auth.service');
const demoServices = require('../services/demo.service');

const testHandler = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];
  try {
    const allDemos = await demoServices.getDemos();
    const replyObj = {
      userInformation: req.userInformation,
      allDemos,
    };
    // const reply = `${req.user}${allDemos}`;

    // res.status(200).send(req.user);
    // console.log('username');
    // console.log(req.user);
    // console.log(reply);
    return res.status(200).send(replyObj);
    // res.status(200).send({ message: 'test handler run successfully' });
  } catch (error) {
    return res.status(500).send();
  }
};

const createDemoHandler = async (req, res) => {
  const { body } = req;
  const createdDemo = await demoServices.createDemo(body);
  const replyObj = {
    userInformation: req.userInformation,
    createdDemo,
  };
  // console.log(body);
  if (createdDemo.length === 0) return res.status(400).send('Failed to create demo');
  res.status(201).send(replyObj);
};

module.exports = {
  testHandler, createDemoHandler,
};
