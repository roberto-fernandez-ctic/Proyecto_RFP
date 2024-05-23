/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Court",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      surface: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "surface",
      },
      condition: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "condition",
      },
    },
    {
      tableName: "Court",
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    }
  );
};
