(\*)Built-in Helpers
#if
#unless
#each
#with
lookup
log

(\*)image upload
app.js
-------
var fileupload= require('express-fileupload')
app.use(fileupload())
<form action="" method="post" enctype="multipart/form-data">
