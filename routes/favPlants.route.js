const express = require('express');
const favPlantsRouter = express.Router();
const favPlantsControllers = require('../controllers/favPlants.controller');

favPlantsRouter.get('/', favPlantsControllers.getFavPlants)
favPlantsRouter.post('/', favPlantsControllers.createFavPlant)
favPlantsRouter.put('/', favPlantsControllers.editFavPlant)
favPlantsRouter.delete('/', favPlantsControllers.deleteFavPlant)
favPlantsRouter.post('/populate-fav-plants', favPlantsControllers.poblarTablaFavPlantas);


module.exports = favPlantsRouter;