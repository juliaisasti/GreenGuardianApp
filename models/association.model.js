const Plants = require('./plants.model');
const FavPlants = require('./favPlants.model');
// const Users = require('./users.model');

Plants.belongsToMany(FavPlants, { through: 'plant_id' })

FavPlants.hasOne(Plants, { foreignKey: 'plant_id' })

// Users.belongsToMany(FavPlants, { through: 'fav_id' })

// FavPlants.hasMany(Users, { foreignKey: 'fav_id' })