const graphql = require('graphql');
const UserProfileType = require('./UserProfileType');
const EntityType = require('./EntityType');


//Import Model
const UserProfile = require('../models/UserProfile');

const {GraphQLObjectType,GraphQLID,GraphQLString, GraphQLList} = graphql;

module.exports =  new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {type: GraphQLID},
        fullName: {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
        email:  {type: GraphQLString},
        password: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        profile: {
            type: UserProfileType,
            async resolve(parent, args) {
                return await UserProfile.find({userId: parent.id});
            }
        }
    })

});