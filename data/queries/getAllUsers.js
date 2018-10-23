const {GraphQLID} = require('graphql');

const UserType = require('../types/UserType');
const User = require('../models/User');

const getAllUsers = {
    type: UserType,
    async resolve(parent,args) {
    return await User.find({});
    }
};

module.exports = getAllUsers