var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "",
  database: "mydbs",
});

// ------------connection code
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
// })

// ------------databse creation
// connection.connect(function (err) {
//   if (err) throw err;
//   connection.query("create database mydbs", (err, data) => {
//     console.log(data);
//   });
// });

// -------------create table- COLLAGE
// -------------add database name to mysql

// connection.connect(function (err) {
//   if (err) throw err;
//   connection.query(
//     "create table collage(id int(11) auto_increment primary key,teacher varchar(30),departments text)",
//     (err, data) => {
//       console.log(data);
//     }
//   );
// });

// -----------Insert Values

// connection.connect(function(err) {
//     if (err) throw err;
// var data=[
//   ["anil","Bsc"],["Ammu","ca"]

// ]
// connection.query('insert into collage(teacher,departments) values ?',[data],(error,data)=>{
//     console.log(data);
// })

// connection.query('select id,departments from collage where id=3',(err,data)=>{
//   console.log(data);
// })

// connection.query('delete from collage where id=3',(err,data)=>{
//   console.log(err);
// })
//
//   connection.query('select * from collage order by teacher asc',(err,data)=>{
//     console.log(data);
//   })
// });

//----------Drop Table

// connection.connect(function (err) {
//   if (err) throw err;
//   connection.query("drop table school", (err, data) => {
//     console.log(data);
//   });
// });

// -----------Table Student

// connection.connect(function (err) {
//   if (err) throw err;
//   connection.query(
//     "create table student(id int(11) auto_increment primary key,name varchar(30),class text)",
//     (err, data) => {
//       console.log(data);
//     }
//   );
// });

connection.connect(function (err) {
  if (err) throw err;

  // connection.query("insert into student(name,class)values('sarath','plus2')",
  //   (err, data) => {console.log(data)});

  // var data = [["adhi","plus2"],["kiran","diploma"],["mariya","poly"]]
  // connection.query('insert into student(name,class) values ? ',[data],(err,data)=>{
  //   console.log(data) })

  // connection.query('select name from student where id=2',(err,data)=>{
  //   console.log(data)})

  // connection.query('delete  from student where id=3',(err,data)=>{
  //   console.log(data)})

  // connection.query("select * from student order by class desc", (err, data) => {
  //   console.log(data)  });

  //-------Inner Join

  // connection.query(
  //   "select collage.teacher,student.class,student.name from collage inner join student on collage.id=student.id",
  //   (err, data) => {
  //     console.log(data);
  //   }
  // );

  //----------left join

  // connection.query(
  //   "select collage.teacher,student.class from collage left join student on student.id=collage.id",
  //   (err, data) => {
  //     console.log(data);
  //   }
  // );

  //------- Right Join
  // connection.query(
  //   "select collage.teacher,student.class from collage right join student on student.id=collage.id",
  //   (err, data) => {
  //     console.log(data)});

  //-----------Foreign Key
  // connection.query(
  //   "create table class(id int(11) auto_increment primary key,teacher_name varchar(20),std_id int(11))",
  //   (err, data) => {
  //     console.log(data);
  //   }
  // );

//   connection.query(
//     "insert into class(teacher_name,std_id) values('nila',2),('nina',23)",
//     (err, data) => {
//       console.log(data);
//     }
//   );

   

});
