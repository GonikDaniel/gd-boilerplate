var _ = require('lodash');
var User = require('../models/user');


module.exports = function(app) {
  app.get('/users', function(req, res) {
    res.json(User.all());
  });

  app.post('/users', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(User.create(req.body));
    }, 1000);
  });

  app.put('/users/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(User.update(req.body));
    },1000);
  });

  app.get('/users/:id', function(req, res){
    var userId = parseInt(req.params.id, 10);

    // var selectedUser = _.find(users, function(user){
    //   return user.id === userId;
    // });

    res.json(User.get(userId) || {});
  });

  app.delete('/users/:id', function(req, res) {
    res.json(User.delete(parseInt(req.param('id'), 10)) || {});
  });
};
