const sequelize = require('../config/connection');
const { Patient, Doctor } = require('../models');

// const sequelize = require('../config/connection');
// const { User } = require('../models');

 const PatientSeedData = require('./patientSeedData.json');
 const DoctorSeedData = require('./doctorSeedData.json');
 

 const seedDatabase = async () => {
   await sequelize.sync({ force: true });



   await Patient.bulkCreate(PatientSeedData, {
     individualHooks: true,
     returning: true,
   });
   await Doctor.bulkCreate(DoctorSeedData, {
    individualHooks: true,
    returning: true,
  });

   process.exit(0);
 };

 seedDatabase();
