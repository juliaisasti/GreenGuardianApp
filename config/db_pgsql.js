const { Sequelize } = require('sequelize');

require('dotenv').config()

// const Plants = require('../models/plants.model');
// const FavPlants = require('../models/favPlants.model');

// Plants.belongsToMany(FavPlants, { through: 'plant_id' })

//?sslmode=require

const dbURI = `postgres://${process.env.SQL_USER}:${process.env.SQL_PASSWORD}@${process.env.SQL_HOST}/${process.env.SQL_NAME}`

const db = new Sequelize(dbURI, {logging:false});

const connectSQL = async () => {
    try {
        await db.authenticate();
        console.log('PostgreSQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();

module.exports = {
    connectSQL,
    db
}

