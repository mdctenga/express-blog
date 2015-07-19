'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.addColumn('Comments','user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
    done();
  },

  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn('Comments','user_id');
    done();
  }
};
