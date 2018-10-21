const {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const UserType = require('../types/UserType');
const User = require('../models/User');

const getUserDetail = {
    type: UserType,
    args: {id:{type:GraphQLString}},
    async resolve(parent,args) {
        return await User.findById(args.id);
    }
};

module.exports = getUserDetail