const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	fullName: String,
	email: String,
	password: String,
    phoneNumber: String,
	phoneNumber: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', userSchema);