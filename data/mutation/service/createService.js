const Service = require('../../models/Service');
const ServiceType = require('../../types/ServiceType');
const {GraphQLString,GraphQLBoolean} = require('graphql');

module.exports = {
    type: EntityType,
    args: {
        entityId: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        serviceType: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    },
    resolve(parent,args) {
        let entity = new Entity({
            userId: args.userId,
            entityName: args.entityName,
            description: args.description,
            avatar: args.avatar,
            coverPhoto: args.coverPhoto,
            country: args.country,
            city: args.city,
            state: args.state,
            openingHours: args.openingHours,
            socialLinks: args.socialLinks,
            entityType: args.entityType,
            docLink: args.docLink,
            isValidated: args.isValidated,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt
        });
        return entity.save();
    }
};