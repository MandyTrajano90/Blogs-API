// const { cat } = require('shelljs');
const postService = require('../services/post.service');
const httpMapper = require('../utils/httpMapper');

const getAllPosts = async (req, res) => {
  const { status, data } = await postService.getAllPosts();
  res.status(httpMapper(status)).json(data);
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.user.decoded;
    const { status, data } = await postService.createPost(title, content, categoryIds, userId);
    return res.status(httpMapper(status)).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
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