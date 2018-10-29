var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.sendfile('./src/index.html');
});

app.listen(9000);
console.log('Server listening on 9000');
