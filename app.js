var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var countries = require('./models/countries.json')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

app.get('/countries', function(req,res){
	// res.send('C Test');
	res.send(countries);
});

app.get('/search', function(req,res){
	// res.send('C Test');
	res.send('search test');
});


var server = app.listen(6577, function() {
	console.log('Express server listening on port ' + server.address().port);
});
