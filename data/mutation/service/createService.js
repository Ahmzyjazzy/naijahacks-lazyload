const Service = require('../../models/Service');
const ServiceType = require('../../types/ServiceType');
const {GraphQLString} = require('graphql');

module.exports = {
    type: ServiceType,
    args: {
        entityId: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        serviceType: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    },
    resolve(parent,args) {
        let entity = new Service({
            entityId: args.entityId,
            name: args.entityName,
            description: args.description,
            serviceType: args.serviceType,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt
        });
        return entity.save();
    }
};