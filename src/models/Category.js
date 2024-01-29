module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  })

  Categories.associate = ({ PostsCategories, BlogPosts }) => {
    Categories.belongsToMany(BlogPosts, {
      through: PostsCategories,
      foreignKey: 'categoryId',
      as: 'posts',
      otherKey: "postId",
    });
  }

  return Categories;
};