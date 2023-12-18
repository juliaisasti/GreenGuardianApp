const FavPlants = require("../models/favPlants.model");
const Plants = require('../models/plants.model')
const { populateFavPlants } = require("../utils/seedfavs");

// GET ALL FAV PLANTS + SEARCH FUNCTIONALITY

const getFavPlants = async (req, res) => {
  const fav_id= req.query.fav_id;
  if (fav_id) {
    try {
      const query = await FavPlants.findOne({
        where: { fav_id: fav_id }
      });
      const plant = await Plants.findOne({
        where: {plant_id: query.plant_id}
      })
      const favObj= {
        favPlant: query,
        plantDetail: plant
      }
      res.status(200).json(favObj);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  } else {
    try {
      const query = await FavPlants.findAll({
        include: {
          model: Plants
        }
      });
      console.log(query);
      res.status(200).json(query);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
};

// ADD PLANT
const createFavPlant = async (req, res) => {
  try {
    // const plant = await Plants.findOne({where: req.body.plant_id})

    // const favPlant = {

    // }
    const query = await FavPlants.create(req.body);
    res.status(201).json(query);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// UPDATE PLANT
const editFavPlant = async (req, res) => {
  try {
    const update = await FavPlants.update(req.body, {
      where: { personal_name: req.query.personal_name },
    });
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// DELETE PLANT
const deleteFavPlant = async (req, res) => {
  try {
    const deleted = await FavPlants.destroy({
      where: { personal_name: req.query.personal_name },
    });
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// POPULATE WITH SEED
const poblarTablaFavPlantas = async (req, res) => {
  try {
    const favPlants = await populateFavPlants();
    res.status(201).json(favPlants);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const favPlantsControllers = {
  getFavPlants,
  createFavPlant,
  editFavPlant,
  deleteFavPlant,
  poblarTablaFavPlantas,
};

module.exports = favPlantsControllers;
