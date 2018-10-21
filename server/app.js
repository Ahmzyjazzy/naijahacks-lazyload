const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
 
const app = express(); //invoke the server function

app.use(cors()); //allow cross origin requests

process.env.NODE_ENV = 'development';

console.log(' env ? ', process.env.NODE_ENV == 'development', process.env.NODE_ENV);

const url = 'mongodb://lazyload:lazyload3@ds237373.mlab.com:37373/connecto'; //(process.env.NODE_ENV == 'development') ? 'mongodb://localhost:27017/connecto' : 'mongodb://ahmzyjazzy:support123@ds133353.mlab.com:33353/connecto';

//connect to mlab database
mongoose.connect(url,{useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
});


//setup graphql endpoint middleware
app.use('/graphql', graphqlHTTP({
   schema,//schema tell express about our data and how they are structures
   graphiql: true //setting graphl to test api in a browser
}));

//server listen to port
app.listen(4000, ()=> {
    console.log('now listening for requests on port 4000');
});

/*
schema - define our obj in the gaphql query
mongoose schema - define obj in the real databsa
*/
