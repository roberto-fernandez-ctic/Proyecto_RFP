'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Court, { foreignKey: 'id_court', as: 'court' });
      Booking.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
      Booking.belongsTo(models.Schedule, { foreignKey: 'id_schedule', as: 'schedule' });
    }
  }
  Booking.init({
    id: DataTypes.INTEGER,
    id_court: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_schedule: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};