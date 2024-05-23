/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "name",
      },
      email: {
        type: DataTypes.STRING(254),
        allowNull: false,
        field: "email",
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "password",
      },
      rol: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "rol",
      },
    },
    {
      tableName: "User",
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    }
  );
};
