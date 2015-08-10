var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var https = require('https');
var io;


var app = require('express')();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/statics'));
app.use(session({secret:'QMusic session'}));
app.get('/', require('./routes/index'));
app.get('/labs', require('./routes/labs'));
app.get('/Music', require('./routes/music'));
app.get('/trurl/:id', require('./routes/trurl'));
app.post('/email', require('./routes/email'));
app.post('/create_url', require('./routes/create_url'));
app.get('*', function(request,response) {
    response.redirect('/');
});

var privateKey  = fs.readFileSync('privatekey.key', 'utf8');
var certificate = fs.readFileSync('ssl.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};


var httpsServer = https.createServer(credentials, app);
io = require('socket.io')(httpsServer);
require('./drum_algorithm/main.js')(io);

var drumsplaying = false;
var socket_count = 0;
var socket_ids = [];






var redirectApp = express ()
redirectApp.set('view engine', 'ejs');
redirectApp.use(express.static(__dirname+'/statics'));
redirectApp.use(bodyParser.json())
redirectApp.get('/', function(request, response) {
  var domain = request.headers.host
  if (domain == "quinlanadvertising.com" || domain == "www.quinlanadvertising.com") {
    return response.redirect('https://' + request.headers.host + request.url);
  }
  if (domain == "rsmgmt-preview.quinlanadvertising.com") {
    return response.render('rsmgmt_index.ejs')
  }   
  else {
    return response.render('victor_index.ejs')
  }
    });
redirectApp.post('/email', require('./routes/email'));
redirectServer = http.createServer(redirectApp);

redirectApp.use(function requireHTTPS(req, res, next) {
  var domain = req.headers.host
  if (domain == "quinlanadvertising.com" || domain == "www.quinlanadvertising.com" || domain == "www.quinlanadvertising.com/") {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
})

redirectServer.listen(80);
httpsServer.listen(443);





















