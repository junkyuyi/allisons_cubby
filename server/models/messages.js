var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var MessageSchema = new mongoose.Schema({
	message: {
		type: String,
		required: true
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	likes: [{
		_user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		liked: Boolean
	}]
}, 
{
	timestamps: true
});

var Message = mongoose.model('Message', MessageSchema);