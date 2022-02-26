const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })

    if (req.url === '/') {
        res.write('<h1 style="text-align: center">Home Page</h1>')
        res.end()
    } else if (req.url === '/about') {
        res.write('<h1 style="text-align: center">About Page</h1>')
        res.end()
    } else {
        res.write('<h1 style="text-align: center">Oops!!!</h1>')
        res.end()
    }
})

server.listen(5000)
