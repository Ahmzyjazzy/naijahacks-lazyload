const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailTokenSchema = new Schema({
	email: String,
	token: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('EmailToken', emailTokenSchema);