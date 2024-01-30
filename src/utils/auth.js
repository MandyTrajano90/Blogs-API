const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign({ username: user.email }, secret, jwtConfig);
};

const validateToken = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = {
  generateToken,
  validateToken,
};