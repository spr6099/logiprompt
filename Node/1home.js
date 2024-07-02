let http = require('http')
let url = require('url')
let os = require('os')
console.log(os.arch());

http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' })
    let urls = url.parse(req.url, true).path

    if (urls == '/') {
        res.write("home")
        res.end()
    } else if (urls == '/content') {
        res.write("This is your Content Page")
        res.end()
    } else if (urls == '/login') {
        res.write("Login page")
        res.end()
    }
    else {
        res.write("Not Found")
        res.end()
    }
}).listen(3333)