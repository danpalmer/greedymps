var express = require('express');
var fs = require('fs');
var app = express();

app.use('/assets', express.static('assets'));
app.get('/', function(req, res){
  fs.readFile('index.html', function(err, file) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', file.length);
    res.end(file);
  });
});

app.listen(process.env.PORT || 3000);