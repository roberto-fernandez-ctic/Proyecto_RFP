/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      id_court: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "id_court",
      },
      id_user: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "id_user",
      },
      id_schedule: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "id_schedule",
      },
    },
    {
      tableName: "Booking",
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    }
  );
};
