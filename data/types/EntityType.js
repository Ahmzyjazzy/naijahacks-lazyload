const graphql = require('graphql');
const UserType = require('./UserType');
const ReviewType = require('./ReviewType');

const User = require('../models/User');
const Review = require('../models/Review');

const {GraphQLObjectType,GraphQLString,GraphQLID} = graphql;
module.exports =  new GraphQLObjectType({
    name: 'EntityType',
    fields: ()=> ({
        id: {type: GraphQLID},
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
        isValidated: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
        // user: {
        //     type: UserType,
        //     resolve(parent, args){
        //         return User.findById(parent.userId)
        //     }
        //
        // },
        // review: {
        //     type: ReviewType,
        //     resolve(parent, args){
        //         return Review.findById(parent.userId)
        //     }
        // },
    })

});