'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.CHAR(140)
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        models.Comment.belongsTo(models.User);
        models.Comment.belongsTo(models.Post);
      }
    }
  });
  return Comment;
};