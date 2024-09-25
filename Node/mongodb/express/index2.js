let express = require("express");
const app = express();
let path = require("path");

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "para.html"));
});
app.listen(4000);
