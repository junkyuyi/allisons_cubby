var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {
	// index: function(req, res) {
	// 	Comment.find({}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	// create: function(req, res) {
	// 	var usr = new Comment(req.body);
	// 	usr.save(function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	// show: function(req, res) {
	// 	Comment.findOne({_id:req.params.id}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	// update: function(req, res) {
	// 	Comment.findOne({_id:req.params.id}, function(err, data) {
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
	// 	Comment.remove({_id:req.params.id}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// }
}