const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
    res.end('Welcome to our homepage')
   }
   else if(req.url === '/about'){
        /*blocking code  - this means that if one user requests for the aboyt page
        the otheres will have to wait for the user to acquire to the resources then they
        can access the resources*/
    for(let i = 0; i <1000; i++){
        for (let j = 0 ; j < 1000; j++){
            console.log(`${i} ${j}`)
        }
    }
    res.end('about page')
   }
   else{
        res.end(`
        <h1>Oops !</h1>
        <p>We cant seem to find the page youre looking for</p>
        <a href="/">back home</a>
        `)       
   }
})

server.listen(5000)