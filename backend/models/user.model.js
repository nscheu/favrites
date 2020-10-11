const mongoose = require('mongoose');
//require("mongoose").Promise = require("bluebird");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  hasFavorite: false,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
