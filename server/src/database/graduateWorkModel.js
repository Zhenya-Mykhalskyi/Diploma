const { DataTypes } = require("sequelize");

const createGraduateWorkModel = orm => {
  const GraduateWork = orm.define(
    "graduate_work",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      theme: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      leader: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: "graduate_work",
      timestamps: false,
    }
  );
  return GraduateWork;
};

module.exports = createGraduateWorkModel;
