const { db } = require('../config/db_pgsql');
const Users = require('../models/users.model');
const usersSeed = require('./users')



//Helper function
const populateDb = async (schema, seed) => {
    await schema.bulkCreate(seed);
};

const populateUsers = async () => {
    await populateDb(Users, usersSeed);
    return usersSeed
};

const usersObj = {
    populateUsers
}

module.exports = usersObj;