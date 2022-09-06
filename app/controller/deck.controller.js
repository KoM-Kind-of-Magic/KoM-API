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
    res.json({'status': 201, 'data': deck, 'desc': 'created'});
  } else {
    res.json({'status': 500, 'desc': 'id incorrect'});
  }
};

exports.patch = async (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  if(id === undefined || id === null) {
    res.json({'status': 500, 'desc': 'id incorrect'})
  }
  Deck
    .findByPk(id)
    .then((deck) => {
      if(data !== null) {
        Deck.update(
          { name: changes.name ?? deck.name },
          { format: changes.format ?? deck.format },
          { type: changes.type ?? deck.type },
          { where: { deck_id: id } }
        )
        .success(() =>
          res.json({'status': 204, 'desc': 'Deck updated'})
        )
        .error(err =>
          res.json({'status': 500, 'error': err})
        )
      }
      else {
        res.json({'status': 404, 'error': "Deck not found"})
      }
    })
    .catch((error) => {
      res.json({'status': 500, 'error': error})
    })
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

exports.deck_by_id = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if(isNaN(id)) {
      res.json({'status': 500, 'error': 'Id given is not a number.'})
    }
    else {
      Deck
      .findByPk(id)
      .then((data) => {
        if(data !== null) {
          res.json({'status': 200, 'data': data});
        }
        else {
          res.json({'status': 404, 'error': "Deck not found"})
        }
      })
      .catch((error) => {res.json({'status': 500, 'error': error})})
    }
  } catch (error) {
    res.json({'status': 500, 'error': error})
  }
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