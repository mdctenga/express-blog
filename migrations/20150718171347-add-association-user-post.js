'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.addColumn('Posts','user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
    done();
  },

  down: function (queryInterface, Sequelize,done) {
    queryInterface.removecolumn('Posts','user_id');
  }
};
