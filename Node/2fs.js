let fs = require("fs");
//create        1.writefile 2.append 3.open

// fs.writeFile('write.txt',"When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a ",(err,data)=>{
//     console.log(err);
// })

//update
// fs.appendFile('write.txt',"When file is a filename, asynchronously ",(err,data)=>{
//     console.log(err);
// })

// fs.open('fsOpen.txt','w',(err,data)=>{
//     console.log(err);
// })


// fs.readFile('write.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.rename('write.txt','fsWrite.txt',(err,data)=>{
//     console.log(err);
// })

fs.unlink('fs.html',(err,data)=>{
    console.log(err);
})