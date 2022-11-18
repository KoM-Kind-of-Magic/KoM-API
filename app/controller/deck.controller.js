const Deck = require('../models/deck')
const Card = require('../models/cards')
const Legalities = require('../models/legalities')

exports.deck = async (req, res) => {
  Deck
    .findAll({offset: 0, limit: 20})
    .then((data) => {
      return res.status(200).send({
        message: "decks are stored in data key",
        data: data,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    })
};

// exports.fields = async (req, res) => {
//   Deck
//     .describe()
//     .then((data) => {res.json({'status': 200, 'data': data});})
//     .catch((error) => {res.json({'status': 500, 'error': error})})
// };

exports.create = async (req, res) => {
  try{
    const deck = new Deck({
      name: req.body.name,
      format: req.body.format,
      type: req.body.type,
    });

    await deck.save();

    return res.status(201).send({
      message: "created",
      data: deck,
    });
  } catch(error)
  {
    return res.status(500).send({
      message: error,
    });
  }
};

exports.patch = async (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  if(id === undefined || id === null) {
    return res.status(500).send({
      message: 'id incorrect',
    });
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
        .success(() => {
          return res.status(204).send({
            message: "Deck updated",
          });
        })
        .error(err => {
          return res.status(500).send({
            message: err,
          });
        })
      }
      else {
        return res.status(404).send({
          message: 'Deck not found',
        });
      }
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
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
        res.status(200).send({
          message: "Deck deleted successfully!",
        });
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
      return res.status(500).send({
        message: "Id given is not a number",
      });
    }
    else {
      Deck
      .findByPk(id)
      .then((data) => {
        if(data !== null) {
          return res.status(200).send({
            message: "Deck stored in data key",
            data: data
          });
        }
        else {
          return res.status(404).send({
            message: "Deck not found",
          });
        }
      })
      .catch((error) => {
        return res.status(500).send({
          message: error.message,
        });
      })
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

exports.decks_by_user_id = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id)
    if(isNaN(id)) {
      return res.status(500).send({
        message: "Id given is not a number.",
      });
    }
    else {
      Deck
        .findAll({
          where: {
            user_id: user_id
          }
        })
        .then((data) => {
          return res.status(200).send({
            message: "Deck stored in data key",
            data: data
          });
        })
        .catch((error) => {
          return res.status(500).send({
            message: error.message,
          });
        })
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Deck.update(req.body, {
      where: { deck_id: id}
    });
    if(updated) {
      const updatedDeck = await Deck.findOne({ where: { deck_id: id} });
      return res.status(200).send({
        message: "Deck stored in data key",
        data: updatedDeck
      });
    }
    throw new Error('Deck not found');
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

exports.remove_card = async (req, res) => {
  try {
    const id = req.params.id;
    const card_uuid = req.params.uuid;

    // On doit d'abord checker si l'id du deck existe bien
    const deck_to_update = await Deck.findByPk(id);
    // On doit faire évoluer les conditions : Si la carte existe dans la bdd
    const card_exist = await Card.findOne({ where: { uuid: card_uuid } });

    // si pas de deck associé
    if(!deck_to_update)
    {
      return res.status(500).send({
        message: "Pas de deck associé à cette id"
      });
    }
    if(!card_exist)
    {
      return res.status(500).send({
        message: "Pas de carte associé à cette uuid"
      });
    }

    if(id === null || id === undefined || id == ":id" || card_uuid === null || card_uuid === undefined || card_uuid == ":uuid")
    {
      return res.status(500).send({
        message: "Id non valide ou UUID de carte non valide : ",
      });      
    }
    else {
      //  on verra pour le delete
      const updated = await Deck.update( { representing_card_uuid: card_uuid} ,{ where: { deck_id: id} });

      return res.status(200).send({
        message: "Id de deck testé : " + id + " UUID de carte testé : " + card_uuid,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

// To do : verification sur chaque carte + append à la liste au lieu de remplacer à chaque fois
exports.add_card = async (req, res) => {
  try {
    const deck = req.params.id;
    const updatedDeck = await Deck.findByPk(deck)

    if(updatedDeck) {
      const updated = await Deck.update({ cards: req.body.cards}, {
        where: { deck_id: deck}
      });

      if(updated)
      {
        return res.status(200).send({
          message: "OK",
          data: updatedDeck
        });      
      }
      else{
        return res.status(500).send({
          message: "Mauvaise uuid de carte",
        }); 
      }

    }
    else {
      return res.status(500).send({
        message: "Mauvaise id de deck",
      });       
    }

  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }  
};

exports.get_formats = async (req, res) => {
  return res.status(200).send({
    data: Legalities.getAttributes().format.values,
  });
};
