const UserProfile = require('../../models/UserProfile');
const UserProfileType = require('../../types/UserProfileType');
const {GraphQLID,GraphQLString} = require('graphql');

module.exports = {
    type: UserProfileType,
    args: {
        id: {type: GraphQLID},
        userId: {type: GraphQLString},
        displayName: {type: GraphQLString},
        skills: {type: GraphQLString},
        socialLinks: {type: GraphQLString},
        description: {type: GraphQLString},
        dateOfBirth: {type: GraphQLString},
        avatar: {type: GraphQLString},
        coverPhoto: {type: GraphQLString},
        gender: {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
        preferredLanguage: {type: GraphQLString},
        country: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zip: {type: GraphQLString},
        userType: {type: GraphQLString},
        createdAt:  {type: GraphQLString},
        updatedAt:  {type: GraphQLString}
    },
    resolve(parent,args) {
        let id = {_id: args.id};
        let update = {
            displayName: args.displayName,
            skills: args.skills,
            socialLinks: args.socialLinks,
            description: args.description,
            dateOfBirth: args.dateOfBirth,
            avatar: args.avatar,
            coverPhoto: args.coverPhoto,
            gender: args.gender,
            phoneNumber: args.phoneNumber,
            preferredLanguage: args.preferredLanguage,
            country: args.country,
            city: args.city,
            state: args.state,
            userType: args.userType,
            updatedAt: new Date().getTime()
        };
        return UserProfile.findByIdAndUpdate(id, update);

    }
}; 