require('dotenv').config();
const express = require('express')
const app = express()
const port = 8089;

const database = require('./database/database')

app.get('/cards', (req, res) => {
  database.getCards()
  .then((data) => {
    res.json({'status': 'success', 'data': data})
  })
  .catch((error) => {
    res.json({'status': 'failure', 'error': error})
  })
})

app.get('/cards/search', (req, res) => {
  database.searchCards()
  .then((data) => {
    res.json({'status': 'success', 'data': data})
  })
  .catch((error) => {
    res.json({'status': 'failure', 'error': error})
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})