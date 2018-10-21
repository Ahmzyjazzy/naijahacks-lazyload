const Review = require('../../models/Review');
const ReviewType = require('../../types/ReviewType');
const {GraphQLString} = require('graphql');

module.exports = {
    type: ServiceType,
    args: {
        entityId: {type: GraphQLString},
        instructorConnectId: {type: GraphQLString},
        rating: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    },
    resolve(parent,args) {
        let service = new Service({
            entityId: args.entityId,
            instructorConnectId: args.instructorConnectId,
            rating: args.rating,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt
        });
        return service.save();
    }
};