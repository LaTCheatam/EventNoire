'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promote = sequelize.define('Promote', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  
  Promote.associate = function(models) {
    Promote.belongsTo(models.Event, { foreignKey:'eventId'})
    Promote.belongsTo(models.User, { foreignKey:'userId'})
  };
  return Promote;
};