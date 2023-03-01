const CardModel = require('../models/Card')
const DeckModel = require('../models/Deck')

const addCard = async (req, res) =>{
    //const {deckId, front, back} = req.body
    const query = {_id: req.body.deck}
    const card = {deck: req.body.deck, front: req.body.front, back: req.body.back}
    const updateDocument = {
        $addToSet: {"cardsInDeck": card}
    }
    const result = await DeckModel.updateOne(query, updateDocument)
    res.send(card)
}

const deleteCard = async(req, res) =>{
    const query = {_id: req.body.deck._id}
    const updateDocument = {
      $pull: {"cardsInDeck": req.body.card}
    }
    const result = await DeckModel.updateOne(query, updateDocument)
    res.send(result)
}

module.exports = {
    addCard,
    deleteCard
}