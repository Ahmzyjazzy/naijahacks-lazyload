const UserType = require('../../types/UserType');
const User = require('../../models/User');
const {GraphQLString} = require('graphql');


const addUser = {
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

module.exports = addUser