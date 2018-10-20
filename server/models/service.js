const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
	entityId: String,
    name: String, 
    description: String,
    serviceType: String,
	createdAt: TimeStamp,
    updatedAt: TimeStamp
});

module.exports = mongoose.model('Service', serviceSchema);