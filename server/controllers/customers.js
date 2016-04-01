var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(req, res) {
      Customer.find({}, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function(req, res) {
      Customer.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    delete: function(req, res){
      Customer.remove({_id: req.params.id}, function (err, results){
      console.log(results);
      });
    }

  };
})();
