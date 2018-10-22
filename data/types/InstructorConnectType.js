const graphql = require('graphql');
const EntityType = require('./EntityType');
const Entity = require('../models/Entity');

const {GraphQLObjectType,GraphQLString,GraphQLID} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'InstructorConnectType',
    fields: ()=> ({
        id: {type: GraphQLID},
        entityId: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        serviceType: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        entity: {
            type: EntityType,
            resolve(parent, args) {
                return Entity.findById(parent.entityId);
            }
        }
    })
});