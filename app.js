var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var users = require('./routes/users');
var auth = require('./routes/auth');
var cors = require('cors');
var port = 3000;    

var app = express();
app.use(cors());

var db = mongoose.connect('mongodb://root:root@ds013911.mlab.com:13911/storyshot');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'anything', resave: true, saveUninitialized: true,  cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }}));
require('./config/passport')(app);

  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });   

  var story = require('./routes/story')(db); 
  app.use('/story', story);
  app.use('/users', users);
  app.use('/auth', auth);
  app.get('/', function(req,res){
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.send("StoryShot Restful Services");
});

app.listen(port, function(){
	console.log('Running on port: '+port);
});


module.exports = app;