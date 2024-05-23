/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Schedule",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      start: {
        type: DataTypes.TIME,
        allowNull: false,
        field: "start",
      },
      finish: {
        type: DataTypes.TIME,
        allowNull: false,
        field: "finish",
      },
    },
    {
      tableName: "Schedule",
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    }
  );
};
