const {GraphQLString} = require('graphql');

const ReviewType = require('../types/ReviewType');
const Review = require('../models/Review');

const getReviews = {
    type: ReviewType,
    args: {entityId:{type:GraphQLString}},
    async resolve(parent,args) {
        return await Review.findById({entityId: args.entityId});
    }
};

module.exports = getReviews;