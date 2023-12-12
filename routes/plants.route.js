const express = require('express');
const plantsRouter = express.Router();
const plantsControllers = require('../controllers/plants.controller');

plantsRouter.get('/', plantsControllers.getAllPlants)
plantsRouter.post('/populate-plants', plantsControllers.poblarTablaPlantas );


module.exports = plantsRouter;