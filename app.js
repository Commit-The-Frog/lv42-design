var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	console.log(req);
	res.sendFile('index.html');
})

// 3000 포트로 서버 오픈
app.listen(4219, function() {
    console.log("start! express server on port 3000")
})

