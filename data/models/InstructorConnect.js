const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorConnectSchema = new Schema({
	hostId: String, 
	guestId: String, 
    numberOfGuest: String, 
    bookingStatus: String,
    dateConfirmed: String, 
    paymentStatus: String,
	createdAt: TimeStamp,
    updatedAt: TimeStamp
});

module.exports = mongoose.model('InstructorConnect', instructorConnectSchema);