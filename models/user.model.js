var mongoose = require('mongoose');

var userSchema  = new mongoose.Schema({
	month: Date,
	email: String,
	password: String,
	name: String,
	// avatar: String,
	loai: String,
	gia: Number,
	soluong: Number,
	del:String,
	giao: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;