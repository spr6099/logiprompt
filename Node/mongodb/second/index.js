let mongodb = require("mongodb").MongoClient;
let client = new mongodb("mongodb://localhost:27017/");
client
  .connect()
  .then((dbase) => {
    let database = dbase.db("myDb");

    // database.collection("data2").insertOne({ name: "sarath", no: 89 }).then((result) => {console.log(result);
    // }).catch((err) => console.log(err));

    // database.collection("data1").insertMany([{name:'aby',no:78},{name:'aji',num:54}]).then((result)=>{
    //     console.log(result);
    // }).catch((err)=>console.log(err))

    // database.collection('data1').find().toArray().then((result)=>{
    //     console.log(result);
    // }).catch((err)=>console.log(err))

    // database.collection('data1').findOne({name:"sarath"}).then((result)=>{
    //     console.log(result);
    // }).catch((err)=>console.log(err))

    // database.collection('data1').find({},{projection:{_id:0,name:1}}).toArray().then((result)=>{
    //     console.log(result);
    // }).catch((error)=>console.log(err));

    // database.collection('data1').find().sort({name:-1}).toArray().then((result)=>{
    //     console.log(result);
    // })

    // database.collection('data1').updateOne({no:90},{$set:{no:89}}).then((result)=>{
    //     console.log(result);
    // })

    // database
    //   .collection("data1")
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "data2",
    //         localField: "name",
    //         foreignField: "names",
    //         as: "newData",
    //       },
    //     },
    //     { $unwind: "$newData" },
    //   ])
    //   .toArray()
    //   .then((result) => {
    //     console.log(result);
    //   });

    database
      .collection("data1")
      .aggregate([
        {
          $lookup: {
            from: "data2",
            localField: "name",
            foreignField: "names",
            as: "newDb",
          },
        },
        { $unwind: "$newDb" },
      ])
      .toArray()
      .then((result) => {
        console.log(result);
      });
  })
  .catch((err) => console.log(err));
