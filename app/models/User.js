mongoose = require('mongoose');

module.exports = function (mongoose, User) {
  // Define your mongoose model as usual...
  var schema = mongoose.Schema({
    name: String
  });
  
  mongoose.model(User, schema);
};
