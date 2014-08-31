var mongoload = require('mongoload'),
    mongoose = require('mongoose');

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

  //mongoose.model('User', schemas.UserSchema);
  //mongoose.model('Post', schemas.PostSchema);
}
