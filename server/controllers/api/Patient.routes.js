const express = require('express');
const router = express.Router();
const { Patient, Doctor } = require('../../models'); // Adjust the path based on your project structure

// Create a new Patient
router.post('/', async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all Patients
router.get('/', async (req, res) => {
  try {
    const Patients = await Patient.findAll({
      include: Doctor,
    });
    res.status(200).json(Patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific Patient by ID
router.get('/:id', async (req, res) => {
  const PatientId = req.params.id;
  try {
    const Patient = await Patient.findByPk(PatientId);
    if (Patient) {
      res.status(200).json(Patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific Patient by ID
router.put('/:id', async (req, res) => {
  const PatientId = req.params.id;
  try {
    const [updatedRows] = await Patient.update(req.body, {
      where: { id: PatientId },
    });
    if (updatedRows > 0) {
      res.status(200).json({ message: 'Patient updated successfully' });
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific Patient by ID
router.delete('/:id', async (req, res) => {
  const PatientId = req.params.id;
  try {
    const deletedRowCount = await Patient.destroy({
      where: { id: PatientId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({ message: 'Patient deleted successfully' });
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
