var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [{name:"Mani Senju"},{name:"Madara Uchiha"},{name:"Kakashi Hatakey"}];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	
	res.render('index',{serverPeople:people});
	
});

app.listen(port);