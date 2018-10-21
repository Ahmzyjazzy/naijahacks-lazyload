const {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const UserType = require('../types/userType');
const User = require('../models/userModel');

const getUserDetail = {
    type: UserType,
    args: {id:{type:GraphQLString}},
    async resolve(parent, args) {
        return await User.find({id: args.id});
    }
};

module.exports = getUserDetail