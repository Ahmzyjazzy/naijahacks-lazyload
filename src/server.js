const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

process.env.NODE_ENV = 'development';

const url = (process.env.NODE_ENV == 'development') ? 'mongodb://localhost:27017/thinklet' : 'mongodb://ahmzyjazzy:support123@ds133353.mlab.com:33353/thinklet';

//connect to mlab database
mongoose.connect(url,{useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
})


//setup graphql endpoint middleware
app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}));

//server listen to port
app.listen(4000, ()=> {
    console.log('now listening for requests on port 4000');
});