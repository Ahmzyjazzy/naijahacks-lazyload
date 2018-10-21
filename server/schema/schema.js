const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

/*TODO: import all queries*/
import getUser from '../queries/login/getUserDetail';

/*TODO: import all mutations*/
import createUser from '../mutation/user/createUser';

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
            createUser,
        }
    })
});
