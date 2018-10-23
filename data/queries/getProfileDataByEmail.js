const {
    GraphQLString,
} = require('graphql');

const UserType = require('../types/UserType');
const User = require('../models/User');

const getProfileDataByEmail = {
    type: UserType,
    args: {email:{type:GraphQLString}},
    async resolve(parent,args) {
        return await User.findOne({email:args.email});
    }
};

module.exports = getProfileDataByEmail