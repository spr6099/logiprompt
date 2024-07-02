var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "",
  database: "mydatabase",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query('create database mydatabase',(error,data)=>{
//         console.log(data);
//     })
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query('create table school(id int(11) auto_increment primary key,principle varchar(30), departments text)',(error,data)=>{
//         console.log(data);
//     })
//   });

con.connect(function (err) {
  if (err) throw err;
  con.query(
    'insert into school(principle,departments) values ("Hari","MCA")',
    (error, data) => {
      console.log(data);
    }
  );
});
