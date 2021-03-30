'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.addColumn('Tickets', 'userId', { 
      allowNull: false,
      type: Sequelize.INTEGER, references: { model: 'Users' } });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.removeColumn('Tickets', 'userId');
  }
};
