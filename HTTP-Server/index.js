const express = require('express')
const app = express()
const port = 3000
// similar to fs.readfile

// create a todo app
app.get('/', function (req, res) {
  res.send('Hello Utkarsh!')
})

app.listen(port)