'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.addColumn('Comments','post_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Posts',
        key: 'id'
      }
    });
    done();
  },

  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn('Comments','post_id');
    done();
  }
};
