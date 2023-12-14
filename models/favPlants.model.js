// schemas/autores.js

// Requires the object that represents our database
const { db } = require("../config/db_pgsql");

// Requires an object that contains the different data types in Sequelize
const { DataTypes } = require("sequelize");

// Defines the schema using the define method on our db object. Define has as first argument the name of the model and as second argument an object containing the name of the fields and their features.

// const Plants = require('./plants.model')

const FavPlants = db.define(
  "FavPlants",
  {
    fav_id: {
      field: "fav_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    plant_id: {
      field: "plant_id",
      type: DataTypes.INTEGER,
    },
    personal_name: {
      field: "personal_name",
      type: DataTypes.STRING,
    },
    status: {
      field: "status",
      type: DataTypes.BOOLEAN,
    },
    last_watered: {
      field: "last_watered",
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    water_reminder: {
      field: "water_reminder",
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    initialAutoIncrement: 1,
    db,
    modelName: "FavPlants",
    tableName: "fav_plants",
  }
);

// This syncs our model with our database.
FavPlants.sync();

module.exports = FavPlants;
