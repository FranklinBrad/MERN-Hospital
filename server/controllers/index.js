const express = require('express');
const router = express.Router();

const PatientRoutes = require('./api/Patient.routes');
const songRoutes = require('./api/Doctor.routes')

// Adjust the path based on your file structure
// Import other route modules as needed

router.use('/api/Patient', PatientRoutes);
router.use('/api/Doctor', songRoutes)
// Use other routes as needed

module.exports = router;