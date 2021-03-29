const authService = require('../services/auth.service');

const authenticateJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const jwtToken = authHeader.split(' ')[1];
    try {
      // console.log('What');
      const userData = await authService.verifyToken(jwtToken);
      // console.log(userData);
      // console.log('-----');
      req.userInformation = userData;
      console.log('checking 1');
      const { body } = req;
      console.log(body);
      next();
    } catch (err) {
      res.status(401).send();
    }
  } else {
    res.status(400).send();
  }
};

module.exports = { authenticateJwt };
