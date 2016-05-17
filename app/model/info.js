// *********************************************************************************
// CHARACTER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CHARACTERS IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 
//


// Creates a "Character" model that matches up with DB
//makes the table if it doesnt already exisit

//sequeilize translates for other languages

var Person = sequelize.define("tester", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	firstName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING,
	},
	

	age: {
		type: Sequelize.INTEGER,
	},

	email: {
		type: Sequelize.STRING,
	},
	userName: {
		type: Sequelize.STRING,
	},
	passWord: {
		type: Sequelize.STRING,
	},
	food: {
		type: Sequelize.STRING,
	},
	location: {
		type: Sequelize.STRING,
	},

	photo: {
		type: Sequelize.STRING,
	},

	gender: {
		type: Sequelize.STRING,
	},

	genderPref: {
		type: Sequelize.STRING,
	}
});

// Syncs with DB
//connects with it to the other values
Person.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Person;