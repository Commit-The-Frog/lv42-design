var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/page1', function(req, res){
	console.log(req);
	res.sendFile(__dirname + '/public/user_reservation_1.html');
})

app.get('/page2', function(req, res){
	console.log(req);
	res.sendFile(__dirname + '/public/user_reservation_2.html');
})

app.get('/', function(req, res){
	console.log()
	res.sendFile('index.html');
})

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

