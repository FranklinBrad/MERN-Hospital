const express = require('express');
const router = express.Router();
const { Doctor } = require('../../models'); // Adjust the path based on your file structure

// Get all Doctor
router.get('/', async (req, res) => {
  try {
    const Doctor = await Doctor.findAll();
    res.json(Doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific song by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const song = await Doctor.findByPk(id);

    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    res.json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new song
router.post('/', async (req, res) => {
  const { title, artist, duration } = req.body;

  try {
    const newSong = await Doctor.create({ title, artist, duration });
    res.status(201).json(newSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a song by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, artist, duration } = req.body;

  try {
    const song = await Doctor.findByPk(id);

    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    await song.update({ title, artist, duration });
    res.json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a song by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const song = await Doctor.findByPk(id);

    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    await song.destroy();
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;