const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

/*TODO: import all queries*/



const getUserDetail = require('../queries/getUserDetail');
const getUserProfile = require('../queries/getUserProfile');
const getProfileDataByEmail = require('../queries/getProfileDataByEmail');

/*TODO: import all mutations*/
const addUser = require('../mutation/user/addUser');
const addUserProfile = require('../mutation/user/addUserProfile');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
        /* list all queries here */
            getUserDetail,
            getUserProfile,
            getProfileDataByEmail
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
        /* list all mutations here */
            addUser,
            addUserProfile,

        }
    })
});


