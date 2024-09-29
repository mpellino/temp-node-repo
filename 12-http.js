const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/') {
        res.end('Welcome to our page')
    }
    else  if (req.url === '/about'){
        res.end ('Here is our short history')
    } else {
        res.end (`<h1>Oops!</h1>`)
    }
})

server.listen(5001)