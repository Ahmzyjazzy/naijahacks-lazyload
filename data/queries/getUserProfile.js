const {
    GraphQLString,
} = require('graphql');

const UserProfileType = require('../types/UserProfileType');
const UserProfile = require('../models/UserProfile');

const getUserProfile = {
    type: UserProfileType,
    args: {id:{type:GraphQLString}},
    async resolve(parent,args) {
        return await UserProfile.findById(args.id);
    }
};

module.exports = getUserProfile