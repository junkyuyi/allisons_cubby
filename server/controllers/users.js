var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	// index: function(req, res) {
	// 	User.find({}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	// create: function(req, res) {
	// 	if(req.body.password !== req.body.confirm_password) {
	// 		res.json({
	// 			errors: {
	// 				message: "Provided passwords do not match!"
	// 			}
	// 		});
	// 	} else {
	// 		var usr = new User(req.body);
	// 		usr.save(function(err, data) {
	// 			if(err) {
	// 				res.json(err);
	// 			} else {
	// 				res.json(data);
	// 			}
	// 		});
	// 	}
	// },
	show: function(req, res) {
		User.findOne({_id:req.params.id}, function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
	}
	// update: function(req, res) {
	// 	User.findOne({_id:req.params.id}, function(err, data) {
	// 		for (var key in req.body) {
	// 			data[key] = req.body[key];
	// 		}
	// 		data.save(function(err) {
	// 			if(err) {
	// 				res.json(err);
	// 			} else {
	// 				res.json(data);
	// 			}
	// 		});
	// 	});
	// },
	// delete: function(req, res) {
	// 	User.remove({_id:req.params.id}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// }
}