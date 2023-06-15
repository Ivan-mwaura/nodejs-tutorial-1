const http  = require('http')

/*const server = http.createServer((req, res)=>{
    res.end('welcome')
})*/

//using Event Emmiter api

const server = http.createServer()

//emmits request event
//subscribe to it / listen to it/ respond to it

server.on('request',(req, res) =>{
    res.end('welcome')
})

server.listen(5000)