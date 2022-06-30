const express = require('express')
const app = express()
const port = 8080

const database = require('./database/database')

app.get('/cards', (req, res) => {
  result = database.searchCards()
  console.log(typeof(result));
  res.json(result)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})