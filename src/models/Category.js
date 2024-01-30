module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  })

  Categories.associate = ({ PostCategory, BlogPost }) => {
    Categories.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      as: 'blogPosts',
      otherKey: "postId",
    });
  }

  return Categories;
};