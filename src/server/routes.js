var express = require('express');
var app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.main});
});

// Load routes
require('./routes/user')(app); //user routes
require('./routes/category')(app); // category routes

module.exports = app;