const graphql = require('graphql');
const UserType = require('./UserType');
const EntityType = require('./EntityType');

const {GraphQLObjectType,GraphQLString,GraphQLID} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'ReviewType',
    fields: ()=> ({
        id: {type: GraphQLID},
        userId: {type: GraphQLString},
        entityId: {type: GraphQLString},
        rating: {type: GraphQLString},
        reviewComment: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        // entity: {
        //     type: EntityType,
        //     resolve(parent, args) {
        //         // return _.find(data, {id: parent.entityId});
        //     }
        // },
        // user: {
        //     type: UserType,
        //     resolve(parent, args) {
        //         // return _.find(data, {id: parent.userId});
        //     }
        // }
    })

});