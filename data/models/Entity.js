const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = new Schema({
    userId: String,
    entityName: String,
    description: String,
    avatar: String,
    coverPhoto: String,
    country: String,
    city: String,
    state: String,
    openingHours: String,
    socialLinks: String,
    entityType: String,
    docLink: String,
    isValidated: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Entity', entitySchema);