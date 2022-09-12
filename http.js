const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('welcome to history page')
    }
    else {
        res.end(

            `<h1>Ooops seems we can't find what you are looking for</h1>
            <a href='/'>back homepage</a>`
        )
    }
    
    
})

server.listen(5000);
