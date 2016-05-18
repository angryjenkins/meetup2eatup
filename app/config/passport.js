var passport 		= require('passport'),
 	localStrategy 	= require('passport-local').Strategy,
 	loginStrategy = new localStrategy(
 		{usernameField: userName, passwordField: passWord}
 		)



function init(){
	
}


module.exports = init;