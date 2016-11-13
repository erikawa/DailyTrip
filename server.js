var express = require("express");
var app = express();
var router = express.Router();
var api = require('instagram-node').instagram();
var path = __dirname + '/views/';
var authResult = null;

router.use(function(req, res, next) {
	//console.log("/" + req.method);
	next();
});

router.get("/", function(req, res) {
	res.redirect("/home");
});

router.get("/home", function(req, res) {
	res.sendFile(path + "home.html");
});

router.get("/about", function(req, res) {
	res.sendFile(path + "about.html");
});

router.get("/contact", function(req, res) {
	res.sendFile(path + "contact.html");
});

router.get("/login", function(req, res) {
	res.sendFile(path + "login.html");
});

router.get("/register", function(req, res) {
	res.sendFile(path + "register.html");
});

router.get("/profile", function(req, res) {	
  res.sendFile(path + "profile.html");
});

router.get('/profileInfo', function(req, res) {
  res.send(authResult.user);
});

//************************* Api do Instagram **********************************
api.use({
	client_id: 'KEY',
    client_secret: 'KEY'
});

var redirect_uri = 'http://localhost:3000/handleauth/';

exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("{}");
    } else {
      authResult = result;
    }
    res.redirect('/profile');
  });  
};
//************************* Fim da Api do Instagram **********************************

router.get('/handleauth', exports.handleauth);

router.get("/authenticate", exports.authorize_user);

router.get("/maps", function(req, res) {
	res.sendFile(path + "maps.html");
});

app.use("/", router);
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use("/assets", express.static(__dirname + "/assets/"));

app.use("*", function(req, res) {
	//esponse.sendFile(path + "404.html");
});

app.listen(3000, function(){
	console.log("Server is Up!");
});

