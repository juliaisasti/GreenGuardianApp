const FavPlants = require("../models/favPlants.model");
const Plants = require('../models/plants.model')
const { populateFavPlants } = require("../utils/seedfavs");

// GET ALL FAV PLANTS + SEARCH FUNCTIONALITY (HACE DOS COSAS)
const getFavPlants = async (req, res) => {
  const fav_id= req.query.fav_id;
  if (fav_id) {
    try {
      // DATOS DE LA PLANTA FAVORITA
      const query = await FavPlants.findOne({
        where: { fav_id: fav_id }
      });
      // DATOS DE LA API POR PLANT_ID (QUE ESTÁN EN LA PLANTA FAVORITA TAMBIÉN)
      const plant = await Plants.findOne({
        where: {plant_id: query.plant_id}
      })
      // CREO EL OBJETO PARA JUNTARLOS
      const favObj= {
        favPlant: query,
        plantDetail: plant
      }
      // DEVUELVO EL OBJETO CON TODA LA INFO DE MI FAVORITO Y DE LA API POR PLANT_ID
      res.status(200).json(favObj);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  } else {
    try {
      // TRAIGO TODOS LOS FAVORIT0S
      const query = await FavPlants.findAll();
      // ENTRO A LA QUERY Y LA MAPEO PARA OBTENER TODOS LOS PLANT_IDs 
      const idPlants = query.map(obj=> obj.plant_id)
      // HAGO UN BUCLE CON IDPLANTS PARA QUE EN CADA POSICION ENTRE A PLANTS PARA QUE SE AGREGUE A EL FAVORITO EL TIPO DE PLANTA Y SU INFO
      const arrPlants = []
      for (let i = 0; i < idPlants.length; i++) {
        const plant = await Plants.findOne({
          where: {plant_id: query[i].plant_id}
        })
        // LO PUSHEO A ARRPLANTS
        arrPlants.push(plant)
      }

      // HAGO UN BUCLE PARA QUE SE CREE POR ORDEN EL OBJETO QUE TENGA LA INFO DE FAV Y DE LA PLANTA Y LA PUSHEO A PLANTARROBJ
      const plantArrObj = []
      for (let i = 0; i < idPlants.length; i++) {
        const fav = query[i]
        const plant = arrPlants[i]
        const objPlant = {
          fav,
          plant
        }
        plantArrObj.push(objPlant)
      }
      console.log(query);
      res.status(200).json(plantArrObj);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
};

// ADD PLANT
const createFavPlant = async (req, res) => {
  try {
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
