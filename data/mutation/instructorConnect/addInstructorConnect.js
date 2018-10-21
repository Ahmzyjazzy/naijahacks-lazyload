const InstructorConnect = require('../../models/InstructorConnect');
const InstructorConnectType = require('../../types/InstructorConnectType');
const {GraphQLString} = require('graphql');

module.exports = {
    type: InstructorConnectType,
    args: {
        hostId: {type: GraphQLString},
        guestId: {type: GraphQLString},
        bookingStatus: {type: GraphQLString},
        dateConfirmed: {type: GraphQLString},
        paymentStatus: {type: GraphQLString},
        comment: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    },
    resolve(parent,args) {
        let instructorConnect = new InstructorConnect({
            hostId: args.hostId,
            guestId: args.guestId,
            bookingStatus: args.bookingStatus,
            paymentStatus: args.paymentStatus,
            dateConfirmed:args.dateConfirmed,
            comment: args.comments,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt
        });
        return instructorConnect.save();
    }
};