const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
	entityId: String,
    name: String, 
    description: String,
    serviceType: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Service', serviceSchema);