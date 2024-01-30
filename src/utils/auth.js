const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const newToken = jwt.sign(payload, secret, jwtConfig);
  return newToken;
};

const validateToken = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = {
  generateToken,
  validateToken,
};