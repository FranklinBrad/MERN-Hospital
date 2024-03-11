const { Model, DataTypes } = require('sequelize'); // Add DataTypes import
const sequelize = require('../config/connection');

class Doctor extends Model {}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Doctor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Doctor',
  }
);

module.exports = Doctor;
