var geocoder = require('geocoder');

var query = require ('/api/questions');
 
// Geocoding 
geocoder.geocode("Atlanta, GA", function ( err, data ) {
 	console.log(data);
});

module.exports = data;