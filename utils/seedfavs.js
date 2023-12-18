const { db } = require('../config/db_pgsql');
const FavPlants = require('../models/favPlants.model');
const favPlantsSeed = require('./favPlants')


//Helper function
const populateDb = async (schema, seed) => {
    await schema.bulkCreate(seed);
};

const populateFavPlants = async () => {
    await populateDb(FavPlants, favPlantsSeed);
    return favPlantsSeed
};

const favPlantsObj = {
    populateFavPlants
}

module.exports = favPlantsObj;