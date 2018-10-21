const {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const UserProfileType = require('../types/userType');
const {User} = require('../models/userModel');

const getUserDeetail = {
    type: UserType,
    args: {id:{type:GraphQLString}},
    async resolve({request}) {
    return await User.find({id: args.id});
}
};

module.exports = getUserDetail