var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

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

router.get("/teste", function(req, res) {
	res.sendFile(path + "teste.html");
});

app.use("/", router);
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use("/resources", express.static(__dirname + "/resources/"));
app.use("/mustache", express.static(__dirname + "/node_modules/mustache/"));
app.use("/templates", express.static(__dirname + "/views/templates/"));
app.use("*", function(req, res) {
	//esponse.sendFile(path + "404.html");
});

app.listen(3000, function(){
	console.log("Server is Up!");
});

