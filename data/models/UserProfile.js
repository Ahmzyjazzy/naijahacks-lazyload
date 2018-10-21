const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
	userId: String, 
	displayName: String,
    skills: String, 
    socialLinks: String, 
    description: String,
    dateOfBirth: String, 
    avatar: String, 
    coverPhoto: String, 
    gender: String,
    phoneNumber: String, 
    preferredLanguage: String,
    country: String,
    city: String,
    state: String, 
    zip: String, 
    userType: String,
    createdAt: TimeStamp,
    updatedAt: TimeStamp,
});

module.exports = mongoose.model('UserProfile', userProfileSchema);