var instagram = require('../instagram');

module.exports = {
	configureRoutes: function(router, path) {
		router.use(function(req, res, next) {
			//console.log("/" + req.method);
			next();
		});

		router.get('/', function(req, res) {
			res.redirect('/home');
		});

		router.get('/home', function(req, res) {
			res.sendFile(path + 'home.html');
		});

		router.get('/about', function(req, res) {
			res.sendFile(path + 'about.html');
		});

		router.get('/contact', function(req, res) {
			res.sendFile(path + 'contact.html');
		});

		router.get('/login', function(req, res) {
			res.sendFile(path + 'login.html');
		});

		router.get('/register', function(req, res) {
			res.sendFile(path + 'register.html');
		});

		router.get('/profile', function(req, res) {	
  			res.sendFile(path + 'profile.html');
		});

		router.get('/maps', function(req, res) {
			res.sendFile(path + 'maps.html');
		});

		router.get('/profileInfo', function(req, res) {
  			res.send(instagram.profileInfo().user);
		});

		router.get('/handleauth', instagram.handleauth);

		router.get('/authenticate', instagram.authorize_user);
		
		return router;
	}
};