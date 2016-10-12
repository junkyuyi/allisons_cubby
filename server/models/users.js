var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function(value) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
			},
			message: "Email failed validation. Improper format."
		}
	},
	name: {
		type: String,
		required: true,
		minlength: 2
	},
	password: {
		type:String,
		required: true,
		minlength: 8
	},
	_topics: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topic'
	}],
	_messages: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Message'
	}],
	_comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, 
{
	timestamps: true
});

UserSchema.pre('save', function(done){
	// do password check and encryption here
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
	done();
});

UserSchema.methods.passwordCheck = function( loginPassword ){
	return bcrypt.compareSync(loginPassword, this.password);
};

UserSchema.plugin(uniqueValidator);

var User = mongoose.model('User', UserSchema);