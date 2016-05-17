// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {

    // localhost: {
    //     port: 8889,
    //     host: 'localhost',
    //     user: 'root',
    //     password: 'root',
    //     database: "foodMeat"
    

    jawsDB: {
        port: 3306,
        host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'v2ei8c4m7ea8cefv',
        password: 'ej0bxbriwcevsjrl',
        database: "pojuecgmi5zf85ka" 
    //note thawing-everglades-41406 heroku

    }
}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelizeformation and connecting to the mysql database
//taking sequelize in
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',
//define :{ timestamps : false},
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;