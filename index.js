const express = require('express')
const path = require('path')
const graphqlHTTP = require('express-graphql')
const schema = require('./data/schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 7000
const app = express ()

app.use(cors());

process.env.NODE_ENV = 'development';

console.log(' env ? ', process.env.NODE_ENV == 'development', process.env.NODE_ENV);

// const url = 'mongodb://lazyload:lazyload3@ds237373.mlab.com:37373/connecto';

// mongoose.connect(url,{useNewUrlParser: true})
// mongoose.connection.once('open', ()=>{
//     console.log('connected to database');
// })

// app.use('/graphql', graphqlHTTP({
//    schema,
//    graphiql: true 
// }));


app.use(express.static(__dirname + '/public'))


app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
