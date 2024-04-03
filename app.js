var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
})

app.get('/skeleton', function (req, res) {
	res.sendFile(__dirname + '/public/main-page-skeleton.html');
})

app.get('/user', function (req, res) {
	res.sendFile(__dirname + '/public/user-page.html');
})

app.get('/user-skeleton', function (req, res) {
	res.sendFile(__dirname + '/public/user-page-skeleton.html')
})

app.get('/404', function (req, res) {
	res.sendFile(__dirname + '/public/error404.html');
})

app.get('/loading', function (req, res) {
	res.sendFile(__dirname + '/public/loading.html');
})

app.get('/tournament', function (req, res) {
	res.sendFile(__dirname + '/public/tournament-page.html');
});


// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

