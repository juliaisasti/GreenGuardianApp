// // schemas/autores.js

// // Requires the object that represents our database
// const { db } = require('../config/db_pgsql');

// // Requires an object that contains the different data types in Sequelize
// const { DataTypes } = require('sequelize');

// // Defines the schema using the define method on our db object. Define has as first argument the name of the model and as second argument an object containing the name of the fields and their features. 

// const FavPlants = db.define("FavPlants", {
//     idPlant: {
//         field: 'id_plant',
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV1,
//         primaryKey: true,
//     },
//     personalName: {
//         field: 'personal_name',
//         type: DataTypes.STRING,
//     },
//     commonName: {
//         field: 'common_name',
//         type: DataTypes.STRING,
//     },
//     scientificName: {
//         field: 'scientific_name',
//         type: DataTypes.STRING,
//     },
//     watering: {
//         field: 'watering',
//         type: DataTypes.STRING,
//     },
//     sunlight: {
//         field: 'sunlight',
//         type: DataTypes.STRING,
//     },
//     status: {
//         field: 'status',
//         type: DataTypes.STRING,
//     },
//     lastWatered: {
//         field: 'last_watered',
//         type: DataTypes.DATE,
//     },
//     waterReminder: {
//         field: 'water_reminder',
//         type: DataTypes.DATE,
//     }
// },
//     {
//         db,
//         modelName: 'FavPlants',
//         tableName: 'fav_plants',
//     }
// );

// // This syncs our model with our database.
// FavPlants.sync({alter:true});

// module.exports = FavPlants;