var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = mongoose.model('User');

var SEC = 1000, 
	MIN = 60 * SEC,
	HR = 60 * MIN,
	DAY = 24 * HR;

var expireTime = 1 * HR;

module.exports = {
	login: function(req, res) {
		User.findOne({email:req.body.email}, function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else if ( !data ) {
				res.json({
					errors: {
						message: "Invalid email."
					}
				});
			} else if ( !req.body.password || !data.passwordCheck( req.body.password ) ){
				res.json({
					errors: {
						message: "Invalid password."
					}
				});
			} else {
				var token = jwt.sign(data, 'mySuperSecret')
				res.cookie('jwttoken', token, {expires: new Date(Date.now() + expireTime)});
				res.cookie('dashboardsession', JSON.stringify({_id:data.id, email:data.email, name:data.name}), {expires: new Date(Date.now() + expireTime)});
				res.end();
			}
		});		
	},
	register: function(req, res) {
		if(req.body.password !== req.body.confirm_password) {
			res.json({
				errors: {
					message: "Provided passwords do not match!"
				}
			});
		} else {
			var usr = new User(req.body);
			usr.save(function(err, data) {
				if(err) {
					res.status(500).send(err);
				} else {
					var token = jwt.sign(data, 'mySuperSecret')
					res.cookie('jwttoken', token, {expires: new Date(Date.now() + expireTime)});
					res.cookie('dashboardsession', JSON.stringify({_id:data.id, email:data.email, name:data.name}), {expires: new Date(Date.now() + expireTime)});
					res.end();
				}
			});
		}
	}
}