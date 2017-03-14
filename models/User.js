var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    username: String,
    password: String,
    isAdmin: Boolean
})

// schema -> model
var User = mongoose.model('users', userSchema)

module.exports = User;