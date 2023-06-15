//EXAMPLE 1

const {readFile} = require('fs')
//starts the operating process
console.log("started the first task")

readFile('./content/subfolder/test.txt', 'utf-8',(err, result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')
//ends the os process


//EXAMPLE 2
setInterval(()=> {
    console.log("hello world")
},2000)

console.log('  I will run first')

//EXAMPLE 3

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event')

    res.end('Response sent')
})

server.listen(5000, ()=> {
    console.log("server listenig at port :  5000....")
})