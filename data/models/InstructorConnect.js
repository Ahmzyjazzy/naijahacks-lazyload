const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorConnectSchema = new Schema({
	hostId: String, 
	guestId: String, 
    numberOfGuest: String, 
    bookingStatus: String,
    dateConfirmed: String, 
    paymentStatus: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('InstructorConnect', instructorConnectSchema);