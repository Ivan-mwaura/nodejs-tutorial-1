const http = require('http')
const fs = require('fs');
const { error } = require('console');


const server = http.createServer()

server.on('request', (req, res)=>{
    //this method will send the response a s a big file which will lead to large network payload
   /* const text = fs.readFileSync('./content/big.txt',{encoding:'utf-8'})
    res.end(text)*/


    //the createReadstream sends the request in form of chunks(segmented)

    if(req.url === '/data'){
        const fileStream = fs.createReadStream('./content/big.txt',{encoding:'utf8'});

        fileStream.on('open',() =>{
        fileStream.pipe(res)
        })
       
        fileStream.on('error',(err)=>{
         res.end(err)
        })
    }else{
        res.end('No data available')
    }
  
})

server.listen(5000)