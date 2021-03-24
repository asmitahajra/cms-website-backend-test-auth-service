const authService = require('../services/auth.service');

const testHandler = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    res.status(200).send({message: "test handler run successfully"});
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  testHandler,
};
