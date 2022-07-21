const express = require('express')
const app = express()
const port = 8089;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var cardsRoutes = require('./routes/cards');
var userRoutes = require('./routes/user');
var deckRoutes = require('./routes/deck');

app.use('/cards', cardsRoutes);
app.use('/user', userRoutes);
app.use('/deck', deckRoutes);