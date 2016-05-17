//home: //app.get(/signup)
		//app.get(/login)
		//app.get(/questions)


		//app.get(/matches)

 var path 		= require('path');
// var passport=require('../login.passport.js')


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
		
	});

	app.get('/login', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/login.html'));
		
	});

	app.get('/matches', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/matches.html'));
		
	});

	app.get('/questions', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/questions.html'));
		//TODO: make this a modal.
	});

	app.get('/signup', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/signup.html'));
	});

	app.get('/css', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/css/styles.css'));
	});
	
	
	
 
//sucessfull login will go back to home page
// //failed login will stay on page
//  app.post('/login',
//   passport.authenticate('local', { successRedirect: '/questions.html',
//                                    failureRedirect: '/login' }));
//   });

// }
}