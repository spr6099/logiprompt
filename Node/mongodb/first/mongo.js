let mongodb = require("mongodb").MongoClient;
let client = new mongodb("mongodb://localhost:27017");
client
  .connect()
  .then((dbase) => {
    let databse = dbase.db("myTask");
    // databse.collection('firstTry').insertOne({name:'ammu',age:7}).then((result)=>{
    //     console.log(result);
    // })

    // databse.collection('firstTry').insertMany([{name:'akhila',age:17},{name:'anil'}]).then((result)=>{
    //          console.log(result);
    //      })

    // databse.collection('firstTry').find().toArray().then((result)=>{
    //          console.log(result);
    //      })

    // databse
    //   .collection("firstTry")
    //   .findOne({ name: "anil" })
    //   .then((result) => {
    //     console.log(result);
    //   });
    
// database.collection('firstTry').find({},{projection:{_id:0,no:1}}).toArray().then((result)=>{
//         console.log(result);
//     }).catch((err)=>console.log(err))

// database.collection('firstTry').find().sort({name:-1}).toArray().then((result)=>{
//         console.log(result);
//     }).catch((err)=>console.log(err))

// database.collection('firstTry').deleteMany({name:'aby'}).then((result)=>{
//         console.log(result);
//     }).catch((err)=>console.log(err))

// database.collection('firstTry').updateOne({no:89},{$set:{no:90}}).then((result)=>{
//     console.log(result);
// }).catch((err)=>console.log(err))

  })
  .catch((err) => console.log(err));
