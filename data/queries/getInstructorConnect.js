const {GraphQLString} = require('graphql');


const InstructorConnectType = require('../types/InstructorConnectType');
const GetInstructorConnect = require('../models/InstructorConnect');

const getInstructorConnect = {
    type: InstructorConnectType,
    args: {hostId:{type:GraphQLString}},
    async resolve(parent,args) {
    return await GetInstructorConnect.find({hostId: args.hostId});
}
};

module.exports = getInstructorConnect