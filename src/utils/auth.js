const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const newToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const verificationToken = (token) => jwt.verify(token, secret);

module.exports = {
  newToken,
  verificationToken,
};