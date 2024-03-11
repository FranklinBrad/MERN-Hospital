const Doctor = require('./Doctor')
const Patient = require('./Patient')

Doctor.hasMany(Patient, {
    foreignKey: 'Doctor_name',
    onDelete: 'CASCADE',
})

Patient.belongsTo(Doctor, {
    foreignKey: 'Doctor_name',
    onDelete: 'CASCADE'
})

module.exports = {Doctor, Patient}