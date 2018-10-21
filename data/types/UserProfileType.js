const graphql = require('graphql');
const User = require('../models/User');
const UserType = require('./UserType');

const {GraphQLObjectType,GraphQLString, GraphQLID} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'UserProfileType',
    fields: ()=> ({
        id: {type: GraphQLID},
        userId: {type: GraphQLString},
        displayName:  {type: GraphQLString},
        skills:  {type: GraphQLString},
        socialLinks:  {type: GraphQLString},
        description:  {type: GraphQLString},
        dateOfBirth:  {type: GraphQLString},
        avatar:  {type: GraphQLString},
        coverPhoto:  {type: GraphQLString},
        gender:  {type: GraphQLString},
        phoneNumber:  {type: GraphQLString},
        preferredLanguage:  {type: GraphQLString},
        country:  {type: GraphQLString},
        city:  {type: GraphQLString},
        state:  {type: GraphQLString},
        zip:  {type: GraphQLString},
        userType:  {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                // return _.find(User, {id: parent.userId});
            }
        },
    })

});