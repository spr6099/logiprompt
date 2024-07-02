let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
     fs.writeFile(
      "file1.txt",
      "Theme designed mjk",(err,data)=>{
        console.log(err);
      }
    );
    fs.readFile('file1.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
    // res.write("hellow world");
    // res.end();
  })
  .listen(3001);
 