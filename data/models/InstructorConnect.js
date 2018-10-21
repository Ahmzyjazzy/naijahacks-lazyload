const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorConnectSchema = new Schema({
	hostId: String, 
	guestId: String,
    bookingStatus: String,
    comment: String,
    dateConfirmed: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('InstructorConnect', instructorConnectSchema);