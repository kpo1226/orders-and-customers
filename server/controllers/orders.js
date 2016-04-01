var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    show: function(req, res) {
      Order.find({}, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function(req, res) {
      Order.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          console.log(results);
          res.json(results);
        }
      });
    },

    delete: function(req, res){
      Order.remove({_id: req.params.id}, function (err, results){
      console.log(results);
      });
    }

  };
})();
