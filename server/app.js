const express = require('express'); //require express server
const graphqlHTTP = require('express-graphql'); //use to handles graphql request
const schema = require('./schema/schema'); //get our schema
const mongoose = require('mongoose'); //get mongodb instance
const cors = require('cors'); //use for cross origin request
 
const app = express(); //invoke the server function

app.use(cors()); //allow cross origin requests

process.env.NODE_ENV = 'development';

console.log(' env ? ', process.env.NODE_ENV == 'development')

const url = (process.env.NODE_ENV == 'development') ? 'mongodb://localhost:27017/myproject' : 'mongodb://ahmzyjazzy:support123@ds133353.mlab.com:33353/bookstore';

//connect to mlab database
mongoose.connect(url,{useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    //confirm connection
    console.log('connected to database');
})


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