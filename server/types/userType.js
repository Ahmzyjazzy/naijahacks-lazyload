const graphql = require('graphql');
const UserProfileType = require('../types/userProfileType');
const EntityType = require('../types/entityType');

const {GraphQLObjectType,GraphQLList,GraphQLString} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'User',
    fields: ()=> ({
        fullName: {type: GraphQLString},
        email:  {type: GraphQLString},
        password: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        userProfile: {
            type: UserProfileType,
            resolve(parent, args) {
                // return _.find(UserProfileModel, {userId: parent.id});
            }
        },
        entity: {
            type: new GraphQLList(EntityType),
            resolve(parent, args){
                // return _.filter(data, {userId: parent.id})
            }

        },
        instructorConnect:{
            type: GraphQLString,
            resolve(parent,args) {
                // return _.fi
            }
        }
    })

});