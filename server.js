var express = require("express");
var routers = require('./app_modules/router');
var app = express();
var path = __dirname + '/views/';
var authResult = null;
var router = express.Router();

router = routers.configureRoutes(router, path);


app.use("/", router);
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use("/assets", express.static(__dirname + "/assets/"));

app.use("*", function(req, res) {
	//esponse.sendFile(path + "404.html");
});

app.listen(3000, function(){
	console.log('The Server is Up');
});

