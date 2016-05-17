// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Person 	= require("../model/info.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
// 	app.get('api/submit', function(req, res){

// 		// If the user provides a specific character in the URL...
// 		if(req.params.characters){

// 			// Then display the JSON for ONLY that character.
// 			// (Note how we're using the ORM here to run our searches)

// 			//go through character name and find req.params.character then bring the json object
// 			Character.findAll({
// 				where: {
// 					routeName: req.params.characters
// 				}
// 			}).then(function(result){
// 				res.json(result);
// 			})
// 		}

// 		// Otherwise...
// 		else{
// 			// Otherwise display the data for all of the characters. 
// 			// (Note how we're using Sequelize here to run our searches)
// 				Character.findAll({})
// 					.then(function(result){
// 						res.json(result);
// 				})
// 			};

// 	});

// //login aurthentication
// app.post('api/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

	app.get('/api/:id?', function(req, res){
		// If the user provides a specific character in the URL...
		if(req.params.id){

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)
			Person.findAll({
				where: {
					id: req.params.id,
				}
			}).then(function(result){
				res.json(result);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
			Person.findAll({})
				.then(function(result){
					res.json(result);
			})
		};

	});


	app.post('/api/signup', function(req, res){

		// Take the request...
		var person = req.body;

		Person.create({
			firstName: 	person.firstName,
			lastName: 	person.lastName,
			age: 		person.age,
			email: 		person.email,	
			userName: 	person.userName,
			passWord: 	person.passWord,
			food: 		person.food,
			location: 	person.location,
			photo: 		person.photo,
			gender: 	person.gender,
			genderPref: person.genderPref
		});
	})

	app.post('/api/questions', function(req, res){

		// Take the request...
		var person = req.body;

		Person.update({
		  food: person.food,
		  location: person.location
		}, {
		  where: {
		    id: 1
		  }
		});
	})
}
