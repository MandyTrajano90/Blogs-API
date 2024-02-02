// const { cat } = require('shelljs');
const postService = require('../services/post.service');
const httpMapper = require('../utils/httpMapper');

const getAllPosts = async (req, res) => {
  const { status, data } = await postService.getAllPosts();
  res.status(httpMapper(status)).json(data);
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user.decoded;
  const { status, data } = await postService.createPost(title, content, categoryIds, id);
  res.status(httpMapper(status)).json(data);
};
module.exports = {
  getAllPosts,
  createPost,
};