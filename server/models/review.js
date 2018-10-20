const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	instructorConnectId: String, 
	entityId: String,
	rating: String, 
	reviewComment: String,
	createdAt: TimeStamp,
});

module.exports = mongoose.model('Review', reviewSchema);