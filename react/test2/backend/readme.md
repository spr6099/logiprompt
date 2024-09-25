(\*)npm init
(\*)npm i express
(\*)npm i cors

(\*)npm i nodemon

{
// ...
"scripts": {
"start": "node server.js"
},
// ...
}

npm start

(\*)Body Parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

(*)npm i mongodb