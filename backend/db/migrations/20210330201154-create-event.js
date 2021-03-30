'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventTitle: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      numTickets: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      eventDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      eventStart: {
        allowNull: false,
        type: Sequelize.TIME
      },
      eventEnd: {
        allowNull: false,
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};