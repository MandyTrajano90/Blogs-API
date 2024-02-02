// const { cat } = require('shelljs');
const postService = require('../services/post.service');
const httpMapper = require('../utils/httpMapper');

const getAllPosts = async (req, res) => {
  const { status, data } = await postService.getAllPosts();
  res.status(httpMapper(status)).json(data);
};

const createPost = async (req, res) => {
  const { status, data } = await postService.createPost(req.body);
  res.status(httpMapper(status)).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getById(id);
  res.status(httpMapper(status)).json(data);
};

const updatePost = async (req, res) => {
  const { email } = req.user.decoded;
  const { id } = req.params;
  const { title, content } = req.body;
  const { status, data } = await postService.updatedPost({ title, content }, id, email);
  res.status(httpMapper(status)).json(data);
};
module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
};