const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express ()

console.log(path.resolve(__dirname, 'src') + '/index.js')

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
