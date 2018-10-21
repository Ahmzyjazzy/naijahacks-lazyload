const graphql = require('graphql');
const EntityType = require('./EntityType');

const {GraphQLObjectType,GraphQLString} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'InstructorConnectType',
    fields: ()=> ({
        entityId: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        serviceType: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        entity: {
            type: EntityType,
            resolve(parent, args) {
                // return _.find(data, {id: parent.entityId});
            }
        }
    })
});