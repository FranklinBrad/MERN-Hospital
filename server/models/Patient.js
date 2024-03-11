const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Doctor = require('./Doctor');

class Patient extends Model {}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    patient_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctorId: { // Changed to doctorId
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Doctor,
        key: 'id', // Referencing the primary key of Doctor model
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Patient',
  }
);

module.exports = Patient;
