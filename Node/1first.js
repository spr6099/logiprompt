// let https=require('http')
// https.createServer((requ,resp)=>{
//     resp.writeHead(200,{'Content-Type':'text/html'})
//     resp.write('hello node js')
//     resp.end()
// })
// .listen(4000)

let https= require('http')
let url = require('url')
https.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let urlss = url.parse(req.url,true).pathname;
    if(urlss=='/home'){
        res.write('hello home url')
        res.end()
    }
    else{
        res.write('error found')
        res.end()
    }
}).listen(3000)