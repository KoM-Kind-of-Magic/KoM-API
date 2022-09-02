const Deck = require('../models/deck')

exports.deck = async (req, res) => {
  Deck
    .findAll({offset: 0, limit: 20})
    .then((data) => {res.json({'status': 200, 'data': data});})
    .catch((error) => {res.json({'status': 500, 'error': error})})
};

exports.fields = async (req, res) => {
  Deck
    .describe()
    .then((data) => {res.json({'status': 200, 'data': data});})
    .catch((error) => {res.json({'status': 500, 'error': error})})
};

exports.create = async (req, res) => {
  const id = req.body.deck_id;
  if(id !== undefined || id == null) 
  {
    const deck = new Deck({
      deck_id: id,
      name: req.body.name,
    });
    await deck.save();
    res.json(deck);
  } else {
    res.json("id incorrect");
  }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    Deck.destroy({
      where: {deck_id: id}
    })
      .then((deck) => {
        if(!deck) {
          res.status(404).send({
            message: "Deck not found with id " + req.params.id,
          });
        }
        res.json({ message: "Deck deleted successfully!"});
      })
    .catch((error) => {
      if (error.kind === "ObjectId" || error.name === "NotFound")
      {
        return res.status(404).send({
          message: "Deck not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete Deck with id " + req.params.id,
      });
    });
};

exports.decks_by_user_id = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id)
    if(isNaN(id)) {
      res.json({'status': 500, 'error': 'Id given is not a number.'})
    }
    else {
      Deck
        .findAll({
          where: {
            user_id: user_id
          }
        })
        .then((data) => {res.json({'status': 200, 'data': data});})
        .catch((error) => {res.json({'status': 500, 'error': error})})
    }
  } catch (error) {
    res.json({'status': 500, 'error': error})
  }
};