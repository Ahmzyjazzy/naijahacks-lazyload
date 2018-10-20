const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	fullName: String,
	email: String,
	password: String,
	createdAt: TimeStamp,
    updatedAt: TimeStamp
});

module.exports = mongoose.model('User', userSchema);