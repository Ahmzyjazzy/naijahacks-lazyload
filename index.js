const express = require('express')
const path = require('path')
const graphqlHTTP = require('express-graphql')
const schema = require('./data/schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const port = process.env.PORT || 8000
const app = express ()

app.use(cors()); //allow cross origin requests

process.env.NODE_ENV = 'development';

console.log(' env ? ', process.env.NODE_ENV == 'development', process.env.NODE_ENV);

const url = 'mongodb://lazyload:lazyload3@ds237373.mlab.com:37373/connecto'; //(process.env.NODE_ENV == 'development') ? 'mongodb://localhost:27017/connecto' : 'mongodb://ahmzyjazzy:support123@ds133353.mlab.com:33353/connecto';

//connect to mlab database
mongoose.connect(url,{useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
})


//setup graphql endpoint middleware
app.use('/graphql', graphqlHTTP({
   schema,//schema tell graphql about our data and how they are structures
   graphiql: true //setting graphl to test api in a browser
}));

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
