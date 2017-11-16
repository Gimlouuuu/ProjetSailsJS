var bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    email: {
      type: 'email',
      required: true,
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    address: {
      collection: 'adress',
      via: 'owner'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }
};
