var users 		= require("../controllers/users.js"),
	categories 	= require("../controllers/categories.js"),
	topics 		= require("../controllers/topics.js"),
	messages	= require("../controllers/messages.js"),
	comments 	= require("../controllers/comments.js"),
	auth 		= require("../controllers/authenticate.js");

module.exports = function(app) {

	/* Authenticate */
	app.post('/authenticate', auth.login);
	app.post('/register', auth.register);

	/* Categories: only get avail. */
	app.get('/categories', categories.index);

	/* Users */
	// app.get('/users', users.index);
	app.get('/users/:id', users.show);
	// app.post('/users', users.create);
	// app.put('/users/:id', users.update);
	// app.delete('/users/:id', users.delete);

	/* Topics */
	app.get('/topics', topics.index);
	app.get('/topics/:id', topics.show);
	app.post('/topics', topics.create);
	app.put('/topics/:id', topics.update);
	// app.delete('/topics/:id', topics.delete);

	/* Messages */
	// app.get('/messages', messages.index);
	// app.get('/messages/:id', messages.show);
	// app.post('/messages', messages.create);
	app.put('/messages/:id', messages.update);
	// app.delete('/messages/:id', messages.delete);

	/* Comments */
	// app.get('/comments', comments.index);
	// app.get('/comments/:id', comments.show);
	// app.post('/comments', comments.create);
	// app.put('/comments/:id', comments.update);
	// app.delete('/comments/:id', comments.delete);
}