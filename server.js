
var express 		= require('express');
var bodyParser 		= require('body-parser');
var path 			= require('path'); //decodes and breaksup url 
// var exphbs = require('express-handlebars');//handlebars
var methodOverride 	= require('method-override');
var sitemap = require('express-sitemap')();


var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT||7001;

app.use(methodOverride('_method'));

sitemap.generate(app);

// ==============================================================================
//setup handlesbars templating engine
// ==============================================================================
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



require('./app/routes/api-routes.js')(app)
require('./app/routes/html-routes.js')(app)


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});