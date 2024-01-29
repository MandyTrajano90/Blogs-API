module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    underscored: true
  })

  BlogPosts.associate = ({ PostsCategories, Categories, User }) => {
    BlogPosts.belongsToMany(Categories, {
      through: PostsCategories,
      foreignKey: "postId",
      as: "categories",
      otherKey: "categoryId",
    });

    BlogPosts.belongsTo(User, {
      foreignKey: "userId",
      as: "user",
    });
  }

  return BlogPosts;
};