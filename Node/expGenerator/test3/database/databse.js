let mongodb = require("mongodb").MongoClient;
let client = new mongodb("mongodb://localhost:27017/");

function Database() {
  return client.connect().then((dbase) => {
    let data = dbase.db("test3");
    return data;
  });
}

module.exports = Database();
