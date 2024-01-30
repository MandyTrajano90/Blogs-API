const { verificationToken } = require('../utils/auth');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(' ');
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = verificationToken(token);
    req.user = { decoded };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};