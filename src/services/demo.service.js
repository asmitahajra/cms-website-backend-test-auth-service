const { Demo } = require('../models');
const NonExistentError = require('../errors/nonExistentError');

const createDemo = async (body) => {
  const { title } = body;
  const status = body.status || 'Active';

  const createdDemo = await Demo.create({
    title,
    status,
  });
  return createdDemo;
};

const getDemos = async () => {
  const demos = await Demo.findAll();
  // console.log(todos);
  return demos;
};

module.exports = {
  getDemos, createDemo,
};
