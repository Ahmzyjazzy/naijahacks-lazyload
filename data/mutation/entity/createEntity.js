const Entity = require('../../models/Entity');
const EntityType = require('../../types/EntityType');
const {GraphQLString} = require('graphql');

module.exports = {
    type: EntityType,
    args: {
        userId: {type: GraphQLString},
        entityName: {type: GraphQLString},
        description: {type: GraphQLString},
        avatar: {type: GraphQLString},
        coverPhoto: {type: GraphQLString},
        country: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        openingHours: {type: GraphQLString},
        socialLinks: {type: GraphQLString},
        entityType: {type: GraphQLString},
        docLink: {type: GraphQLString},
        isValidated: {type: GraphQLString},
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