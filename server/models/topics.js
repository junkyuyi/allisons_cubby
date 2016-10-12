var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var TopicSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_messages: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Message'
	}]
}, 
{
	timestamps: true
});

var Topic = mongoose.model('Topic', TopicSchema);