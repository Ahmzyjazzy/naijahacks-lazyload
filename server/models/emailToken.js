const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailTokenSchema = new Schema({
	email: String,
	token: String,
	createdAt: TimeStamp,
    updatedAt: TimeStamp
});

module.exports = mongoose.model('EmailToken', emailTokenSchema);