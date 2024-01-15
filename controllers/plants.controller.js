const Plants = require("../models/plants.model");
const { populatePlants } = require("../utils/seed");

// GET ALL PLANTS + SEARCH FUNCTIONALITY
const getPlants = async (req, res) => {
  const plantName = req.query.common_name;
  if (req.query.common_name) {
    const query = await Plants.findOne({
      where: { common_name: plantName.toLowerCase() },
    });
    res.status(200).json(query);
  } else {
    try {
      const query = await Plants.findAll();
      res.status(200).json(query);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
};

// ADD PLANT
const createPlant = async (req, res) => {
  try {
    const query = await Plants.create(req.body);
    res.status(201).json(query);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// UPDATE PLANT
const editPlant = async (req, res) => {
  try {
    const update = await Plants.update(req.body, {
      where: { common_name: req.query.common_name },
    });
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// DELETE PLANT
const deletePlant = async (req, res) => {
  try {
    const deleted = await Plants.destroy({
      where: { common_name: req.query.common_name },
    });
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// POPULATE WITH SEED
const poblarTablaPlantas = async (req, res) => {
  try {
    const plants = await populatePlants();
    res.status(201).json(plants);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const plantsController = {
  getPlants,
  createPlant,
  editPlant,
  deletePlant,
  poblarTablaPlantas,
};

module.exports = plantsController;
