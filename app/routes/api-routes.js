// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Person 	= require("../model/info"); // Pulls out the Character Model
var fs 		= require('fs');
var yelp 	= require('node-yelp-api');
var merge 	= require('merge');

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

	app.get('/matches', function(req,res){
		var options = {
	  consumer_key: 'blnUGOa1xqRIq5Kvk2NIiw',
	  consumer_secret: 'k-VIMJNVzfFn8yA0olc9P2Rk7Os',
	  token: 'mntH_9Niv9kfvf03XW-mPDQUm2wkqiTx',
	  token_secret: 'g-EzbDLsWt8bEAcTxhYFBQNqXuQ',
	};

	fs.readFile('./app/logs/prefLog.txt', (err, data) => {
		if (err) throw err;

		var parameters = JSON.parse(data);

		console.log('read from the text file, ...')
	  	console.log(parameters);

		yelp.search(merge(options, parameters), (data) => {
		  console.log(data);
		}, (err) => {
		  console.error(err);
		});

	});
	})

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

	app.post('/questions', function(req, res){

		// Take the request...
		var person = req.body;

		console.log('push this to the server!');
		console.log(person);
	})

	app.post('/api/questions', function(req, res){

		// Take the request...
		var person = req.body;

		var personString = JSON.stringify(person);

		//write preference to a txt file.
		fs.writeFile('./app/logs/prefLog.txt', personString, (err) => {
		  if (err) throw err;

		});


		// update the database wih new preferences.
		if(person.food != "" && person.location != ""){
			Person.update({
			  food: person.food,
			  location: person.location
			}, {
			  where: {
			    id: 1 //this should be member id
			  }
			});	
		}
		
	})
}
