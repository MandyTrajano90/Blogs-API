const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const newToken = (payload) => {
  const { id, email } = payload;
  return jwt.sign({ id, email }, secret, jwtConfig);
};

const verificationToken = (token) => jwt.verify(token, secret);

module.exports = {
  newToken,
  verificationToken,
};