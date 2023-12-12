// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

// Requires an object that contains the different data types in Sequelize
const { DataTypes } = require('sequelize');

// Defines the schema using the define method on our db object. Define has as first argument the name of the model and as second argument an object containing the name of the fields and their features. 

const Plants = db.define("Plants", {
    common_name: {
        field: 'common_name',
        type: DataTypes.STRING,
    },
    scientific_name: {
        field: 'scientific_name',
        type: DataTypes.STRING,
    },
    climate: {
        field: 'climate',
        type: DataTypes.STRING,
    },
    watering: {
        field: 'watering',
        type: DataTypes.INTEGER,
    },
    sunlight: {
        field: 'sunlight',
        type: DataTypes.INTEGER,
    }
},
    {
        db,
        modelName: 'Plants',
        tableName: 'plants',
    }
);
// {alter:true}
// This syncs our model with our database.
Plants.sync();

module.exports = Plants;