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

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
};