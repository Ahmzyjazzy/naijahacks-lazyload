const {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const UserType = require('../../types/userType');
const {User} = require('../../models/userModel');

module.exports = {
    type: UserType,
    args: {id:{type:GraphQLString}},
    async resolve({request}) {
        return await User.find({id: args.id});
    }
};