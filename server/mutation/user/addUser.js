const UserType = require('../../types/userType');
const User = require('../../models/userModel');
const {GraphQLString} = require('graphql');


module.exports = {
    type: UserType,
    args: {
        fullName: {type: GraphQLString},
        email:  {type: GraphQLString},
        password:  {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
        createdAt:  {type: GraphQLString},
        updatedAt:  {type: GraphQLString}
    },
    resolve(parent,args) {
        let user = new User({
            fullName: args.fullName,
            email: args.email,
            phoneNumber: args.phoneNumber,
            password: args.password,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        });
        return user.save();
    }
};