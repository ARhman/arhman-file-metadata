var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.post('/file-size', upload.single('input-file'), function(req, res, next) {
  res.json({ "size": req.file.size });
  next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000);