const { db } = require('../config/db_pgsql');
const Plants = require('../models/plants.model');
const plantsSeed = require('./plants')



//Helper function
const populateDb = async (schema, seed) => {
    await schema.bulkCreate(seed);
};

const populatePlants = async () => {
    await populateDb(Plants, plantsSeed);
    return plantsSeed
};

const plantsObj = {
    populatePlants
}

module.exports = plantsObj;