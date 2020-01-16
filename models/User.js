const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  //username should be a valid email address
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

//a mongoose model called 'user', it is a class
module.exports = mongoose.model('user', UserSchema)