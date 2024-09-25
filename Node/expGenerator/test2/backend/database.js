let mongodb = require("mongodb").MongoClient;
let client = new mongodb("mongodb://localhost:27017/");

function Data() {
  return client.connect().then((dbase) => {
    let database = dbase.db("formsdb");
    return database;
  });
}
module.exports = Data();
