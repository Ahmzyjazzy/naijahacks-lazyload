const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

/*TODO: import all queries*/
const getUser = require('../queries/login/getUserDetail');

/*TODO: import all mutations*/
const createuser = require('../mutation/user/createUser');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
        /* list all queries here */
            getUser,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
        /* list all mutations here */
            createuser,
        }
    })
});
