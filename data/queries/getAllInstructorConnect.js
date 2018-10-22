const {GraphQLString} = require('graphql');


const InstructorConnectType = require('../types/InstructorConnectType');
const GetInstructorConnect = require('../models/InstructorConnect');

const getAllInstructorConnect = {
    type: InstructorConnectType,
    async resolve(parent,args) {
        return await GetInstructorConnect.find({});
    }
}

module.exports = getAllInstructorConnect;