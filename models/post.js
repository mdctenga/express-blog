'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        models.Post.hasMany(models.Comment);
        models.Post.belongsTo(models.User);
      }
    }
  });
  return Post;
};