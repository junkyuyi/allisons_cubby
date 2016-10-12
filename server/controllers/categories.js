var mongoose = require('mongoose');

/* categories not stored in db. return "hard" list of topics */
module.exports = {
	index: function(req, res) {
		var newRes = [
				"HTML", 
				"CSS",
				"JavaScript",
				"jQuery",
				"AJAX",
				"Python",
				"Flask",
				"Django",
				"Ruby",
				"Rails",
				"RSpec",
				"Active Record",
				"NodeJS",
				"Express",
				"Mongo/Mongoose",
				"Angular"
		]
		res.json(newRes);
	}
}