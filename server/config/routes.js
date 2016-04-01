var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');


  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)

    app.get('/customers', function(req, res) {
      customers.show(req, res);
    })

    app.post('/customers', function(req, res){
      customers.post(req, res);
    });

    app.delete('/customers/:id', function(req, res){
      console.log("MY REQ PARMS", req.params);
      customers.delete(req, res);
    })

    app.get('/orders', function(req, res){
      orders.show(req, res);
    })

    app.post('/orders', function(req, res){
      orders.post(req, res);
    })


  };