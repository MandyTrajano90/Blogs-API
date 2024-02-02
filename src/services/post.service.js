const { BlogPost, User, Category } = require('../models');
const { updatePost } = require('../middlewares/validationInputs');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } },
    ],
  });

  return { status: 'SUCCESSFUL', data: posts };
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } },
    ],
  });

  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  return { status: 'SUCCESSFUL', data: post };
};

const updatedPost = async (postData, id, email) => {
  const error = updatePost(postData);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };
  const user = await User.findOne({ where: { email } });
  const post = await BlogPost.findOne({ where: { id, userId: user.id } });
  if (!post) return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  await BlogPost.update(postData, { where: { id } });
  const modifiedPost = await getById(id);
  return { status: 'SUCCESSFUL', data: modifiedPost.data };
};

module.exports = {
  getAllPosts,
  getById,
  updatedPost,
};