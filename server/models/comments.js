var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var CommentSchema = new mongoose.Schema({
	comment: {
		type: String,
		required: true
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, 
{
	timestamps: true
});

var Comment = mongoose.model('Comment', CommentSchema);