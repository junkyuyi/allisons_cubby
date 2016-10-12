var express  = require('express'),
	path     = require('path'),
	bp       = require('body-parser'), 
	cp 		 = require('cookie-parser'),
	jwt 	 = require('jsonwebtoken'),
	ejwt	 = require('express-jwt'),
	root     = __dirname,
	port     = process.env.PORT || 8000,
	app      = express();

app.use( cp() );
app.use( bp.json() );

// Static MW
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));

// API MW
// app.use( 
// 	ejwt({
// 		secret:"mySuperSecret", 
// 		getToken:function(req) { 
// 			return req.cookies.jwttoken 
// 		}
// 	})
// 	.unless({
// 		path: [
// 			// '/favicon.ico',
// 			'/',
// 			'/authenticate',
// 			'/register'
// 		]
// 	})
// );
// app.use( unless('/authenticate', checkCookie));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); // set routes to 'app'

app.listen( port, function() {
	console.log( `server running on port ${ port }` );
});