var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {
	// index: function(req, res) {
	// 	Message.find({}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	// create: function(req, res) {
	// 	var msg = new Message(req.body);
	// 	msg.save(function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	// show: function(req, res) {
	// 	Message.findOne({_id:req.params.id}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// },
	update: function(req, res) {
		Message.findOne({_id:req.params.id}, function(err, message) {
			var comment = new Comment(req.body);
			message._comments.push(comment);
			comment.save( function(err) {
				message.save( function(err)  {
					if(err) {
						res.status(500).send(err);
					} else {
						res.json(message);
					}
				});
			});
		});
	}
	// delete: function(req, res) {
	// 	Message.remove({_id:req.params.id}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// }
}