const express = require('express');
const plantsRouter = express.Router();
const plantsControllers = require('../controllers/plants.controller');

plantsRouter.get('/', plantsControllers.getPlants)
plantsRouter.post('/', plantsControllers.createPlant)
plantsRouter.put('/', plantsControllers.editPlant)
plantsRouter.delete('/', plantsControllers.deletePlant)
plantsRouter.post('/populate-plants', plantsControllers.poblarTablaPlantas);


module.exports = plantsRouter;