import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
  } from 'graphql';
  
/*TODO: import all queries */


/*TODO: import all mutations */

  
const schema = new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: {
        /* list all queries here */

        },
    }),
    mutation: new ObjectType({ 
        name: 'Mutation',
        fields: {
        /* list all mutations here */

        }
    })
});

export default schema;
