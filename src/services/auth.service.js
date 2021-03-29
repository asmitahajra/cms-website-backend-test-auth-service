const axios = require('axios').default;

const verifyToken = async (token) => {
  const response = await axios.post(`http://${process.env.AUTH_HOST}:${process.env.AUTH_PORT}/validateToken`, {}, {
    headers:
    { Authorization: `Bearer ${token}` },
  });
  // console.log('Response from there');
  // console.log(response.data);
  return response.data;
};

module.exports = { verifyToken };
