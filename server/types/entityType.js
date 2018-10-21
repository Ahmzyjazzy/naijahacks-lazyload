const graphql = require('graphql');
const UserType = require('./userType');
const ReviewType = require('../types/reviewType');

const {GraphQLObjectType,GraphQLString,GraphQLBoolean} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'Entity',
    fields: ()=> ({
        userId: {type: GraphQLString},
        entityName:  {type: GraphQLString},
        description:  {type: GraphQLString},
        avatar:  {type: GraphQLString},
        coverPhoto:  {type: GraphQLString},
        country:  {type: GraphQLString},
        city:  {type: GraphQLString},
        state:  {type: GraphQLString},
        openingHours:  {type: GraphQLString},
        socialLinks:  {type: GraphQLString},
        entityType:  {type: GraphQLString},
        docLink:  {type: GraphQLString},
        isValidated: GraphQLBoolean,
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args){
                // return _.filter(data, {id: parent.userId})
            }

        },
        review: {
            type: ReviewType,
            resolve(parent, args){
                // return _.filter(data, {entityId: parent.id})
            }
        },
    })

});