const express = require('express');
const usersRouter = express.Router();
const usersControllers = require('../controllers/users.controller');

// plantsRouter.get('/', plantsControllers.getPlants)
// plantsRouter.post('/', plantsControllers.createPlant)
// plantsRouter.put('/', plantsControllers.editPlant)
// plantsRouter.delete('/', plantsControllers.deletePlant)
usersRouter.post('/populate-users', usersControllers.poblarTablaUsers);


module.exports = usersRouter;