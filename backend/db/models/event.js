'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventTitle: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    numTickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventImageUrl: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    eventEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});

  Event.associate = function(models) {
    Event.belongsTo(models.User, { foreignKey:'userId'})
    // Event.hasMany(models.Ticket, {foreignKey:'eventId'})
    Event.belongsToMany(models.User, { through: 'Tickets', foreignKey:'eventId', otherKey:'userId'})
    Event.belongsToMany(models.User, { through: 'Promotes', foreignKey:'eventId', otherKey:'userId'});
    Event.hasMany(models.Promote, {foreignKey:'eventId'})
  };
  return Event;
};