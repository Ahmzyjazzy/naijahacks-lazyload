import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema/schema'
import mongoose from 'mongoose'
import cors from 'cors'
 
const app = express(); //invoke the server function

app.use(cors()); //allow cross origin requests

process.env.NODE_ENV = 'development';

<<<<<<< HEAD
const url = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost:27017/connecto' : 'mongodb://ahmzyjazzy:support123@ds133353.mlab.com:33353/connecto';
=======
console.log(' env ? ', process.env.NODE_ENV == 'development', process.env.NODE_ENV);

const url = 'mongodb://lazyload:lazyload3@ds237373.mlab.com:37373/connecto'; //(process.env.NODE_ENV == 'development') ? 'mongodb://localhost:27017/connecto' : 'mongodb://ahmzyjazzy:support123@ds133353.mlab.com:33353/connecto';
>>>>>>> 89c8443d0b30537df7761aaef2e4151ee48a00bb

//connect to mlab database
mongoose.connect(url,{useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
})


//setup graphql endpoint middleware
app.use('/graphql', graphqlHTTP({
   schema,//schema tell express about our data and how they are structures
   graphiql: true //setting graphl to test api in a browser
}));

//server listen to port
<<<<<<< HEAD
app.listen(4000, ()=> {
    console.log('now listening for requests on port 4000');
});
=======
app.listen(4000, () =>{ console.log('now listening for requests on port 4000') });

/*
schema - define our obj in the gaphql query
mongoose schema - define obj in the real databsa
*/
>>>>>>> 89c8443d0b30537df7761aaef2e4151ee48a00bb
