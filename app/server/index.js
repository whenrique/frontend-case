const path = require('path')
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static("public"));
app.use('/data', express.static("data"));



app.listen(3000, () => {
  console.log("server started on port 3000");
});