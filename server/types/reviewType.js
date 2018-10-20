const graphql = require('graphql');
const UserType = require('../types/userType');
const EntityType = require('../types/entityType');

const {GraphQLObjectType,GraphQLString} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'Review',
    fields: ()=> ({
        userId: {type: GraphQLString},
        entityId: {type: GraphQLString},
        rating: {type: GraphQLString},
        reviewComment: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        entity: {
            type: EntityType,
            resolve(parent, args) {
                // return _.find(data, {id: parent.entityId});
            }
        },
        user: {
            type: UserType,
            resolve(parent, args) {
                // return _.find(data, {id: parent.userId});
            }
        }
    })

});