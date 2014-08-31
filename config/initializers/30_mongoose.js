var mongoload = require('mongoload'),
    mongoose = require('mongoose');
var mongooseTypes = require("mongoose-types");
    mongooseTypes.loadTypes(mongoose);


mongoload.bind(mongoose).load({pattern: __dirname + '/app/models/*.js'});

module.exports = function() {
  switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://localhost/test');
      break;
    case 'production':
      mongoose.connect('mongodb://mongodb.example.com/prod');
      break;
  }
  this.mongoose = mongoose;
  this.mongooseTypes = mongooseTypes;
  //mongoose.model('User', schemas.UserSchema);
  //mongoose.model('Post', schemas.PostSchema);
}
