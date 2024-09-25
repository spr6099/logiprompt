let mongodb = require("mongodb").MongoClient;
let client = new mongodb("mongodb://localhost:27017/");

function data() {
  return client.connect().then((dbase) => {
    let database = dbase.db("formdb");
    return database;
  });
}

module.exports = data();
