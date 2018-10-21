import UserProfile from '../models/userProfileModel';
import UserProfileType from '../types/userProfileType';
import {GraphQLString} from 'graphql';

module.exports = {
    type: UserProfileType,
    args: {
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
        let userProfile = new UserProfile({
            userId: args.userId,
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
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        });
        return userProfile.save();
    }
};