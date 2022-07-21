const database = require('../database/database')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  database.getDecks()
  .then((data) => {
    res.json({'status': 'success', 'data': data})
  })
  .catch((error) => {
    res.json({'status': 'failure', 'error': error})
  })
})

module.exports = router;