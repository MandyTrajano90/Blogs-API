const categoryService = require('../services/category.service');
const httpMapper = require('../utils/httpMapper');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.createCategory({ name });
  res.status(httpMapper(status)).json(data);
};

module.exports = {
  createCategory,
};