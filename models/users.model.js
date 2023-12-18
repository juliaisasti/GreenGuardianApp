// // Requires the object that represents our database
// const { db } = require("../config/db_pgsql");

// // Requires an object that contains the different data types in Sequelize
// const { DataTypes } = require("sequelize");

// // Defines the schema using the define method on our db object. Define has as first argument the name of the model and as second argument an object containing the name of the fields and their features.

// const Users = db.define(
//   "Users",
//   {
//     user_id: {
//       field: "user_id",
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     fav_id: {
//       field: "fav_id",
//       type: DataTypes.INTEGER,
//     }
//   },
//   {
//     initialAutoIncrement: 1,
//     db,
//     modelName: "Users",
//     tableName: "users",
//   }
// );

// // This syncs our model with our database.
// Users.sync();

// module.exports = Users;
