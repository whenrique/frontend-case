const path = require('path')
const express = require("express");
const cors = require('cors')

const data = require('./data/data.json')
const app = express();


app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static("public"));

app.get('/data', (req, res, next) => {
  res.json(data)
})

app.listen(8000, () => {
  console.log("server started on port 8000");
});