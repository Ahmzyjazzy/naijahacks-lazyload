const graphql = require('graphql');
const UserProfileType = require('./UserProfileType');
const EntityType = require('./EntityType');


//Import Model
const UserProfile = require('../models/UserProfile');

const {GraphQLObjectType,GraphQLID,GraphQLString} = graphql;

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
                console.log( parent.id);
                const res = await UserProfile.find({userId: parent.id});
                console.log(res);
                return res;
            }
        }
    })

});