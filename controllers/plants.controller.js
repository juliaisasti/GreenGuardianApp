const Plants = require("../models/plants.model");
const { populatePlants } = require("../utils/seed");

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

const createPlant = async (req, res) => {
  try {
    const query = await Plants.create(req.body);
    res.status(201).json(query);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const editPlant = async (req, res) => {
  const update = await Plants.update(req.body, {
    where: { common_name: req.query.common_name },
  });
  res.status(200).json(update);
};

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
  poblarTablaPlantas,
};

module.exports = plantsController;
