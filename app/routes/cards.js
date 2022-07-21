const database = require('../database/database')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  database.getCards()
  .then((data) => {
    res.json({'status': 'success', 'data': data})
  })
  .catch((error) => {
    res.json({'status': 'failure', 'error': error})
  })
})

router.get('/search', (req, res) => {
  database.searchCards()
  .then((data) => {
    res.json({'status': 'success', 'data': data})
  })
  .catch((error) => {
    res.json({'status': 'failure', 'error': error})
  })
})

module.exports = router;