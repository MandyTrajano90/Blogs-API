module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    createdAt: "published",
    updatedAt: "updated",
    timestamps: true,
    underscored: true
  })

  BlogPosts.associate = ({ PostCategory, Category, User }) => {
    BlogPosts.belongsToMany(Category, {
      through: PostCategory,
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