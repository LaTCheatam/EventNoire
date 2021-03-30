'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventTitle: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    numTickets: DataTypes.INTEGER,
    eventDate: DataTypes.DATE,
    eventStart: DataTypes.TIME,
    eventEnd: DataTypes.TIME
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