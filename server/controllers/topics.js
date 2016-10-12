var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res) {
		Topic.find()
		.populate('_user')
		.exec( function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
	},
	create: function(req, res) {
		User.findOne({_id: req.body._user}, function(err, user){
			var tpc = new Topic(req.body);
			user._topics.push(tpc);
			tpc.save(function(err, data) {
				if(err) {
					res.status(500).send(err);
				} else {
					user.save(function(err, data){
						if(err) {
							res.status(500).send(err);
						} else {
							res.json(data);
						}
					});
				}
			});
		});	
	},
	show: function(req, res) {
		Topic.findOne({_id:req.params.id})
		.populate([
			{
				path: "_user",
				model: "User"
			},
			{
				path: "_messages",
				model: "Message",
				populate: [
					{
						path: "_user",
						model: "User"
					},
					{	
						path: "_comments",
						model: "Comment",
						populate: {
							path: "_user",
							model: "User"
						}
					}
				]
			}])
		.exec( function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
	},
	update: function(req, res) {
		Topic.findOne({_id:req.params.id}, function(err, topic) {
			var message = new Message(req.body);
			topic._messages.push(message);
			message.save( function(err) {
				topic.save( function(err)  {
					if(err) {
						res.status(500).send(err);
					} else {
						User.findOne({_id:message._user}, function(err, user) {
							user._messages.push(message);
							user.save( function(err) {
								if(err) {
									res.status(500).send(err);
								} else {
									res.json(topic);
								}
							});
						});
					}
				});
			});
		});
	}
	// delete: function(req, res) {
	// 	Topic.remove({_id:req.params.id}, function(err, data) {
	// 		if(err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(data);
	// 		}
	// 	});
	// }
}