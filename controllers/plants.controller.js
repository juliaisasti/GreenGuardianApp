const Plants = require('../models/plants.model')
const {populatePlants} = require('../utils/seed');

const getAllPlants = async (req, res) => {
    try {
        const query = await Plants.findAll();
        res.status(200).json(query); 
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}

const poblarTablaPlantas = async (req, res) => {
    try {
        const plants = await populatePlants();
        res.status(201).json(plants);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
};

const plantsController = {
    getAllPlants,
    poblarTablaPlantas
}

module.exports = plantsController;