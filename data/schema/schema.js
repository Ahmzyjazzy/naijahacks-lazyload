const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

/*TODO: import all queries*/
const getUserDetail = require('../queries/login/getUserDetail');

/*TODO: import all mutations*/
const addUser = require('../mutation/user/addUser');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
        /* list all queries here */
            getUserDetail,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
        /* list all mutations here */
            addUser,
        }
    })
});


