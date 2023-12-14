const Plants = require('./plants.model');
const FavPlants = require('./favPlants.model');

Plants.belongsToMany(FavPlants, { through: 'plant_id' })

FavPlants.hasMany(Plants, { foreignKey: 'plant_id' })