const DeckModel = require('../models/Deck')

const addDeck = async (req, res) =>{
    const {deckName, cards} = req.body
    try {
        const deck = await DeckModel.create({
            deckName,
            cards
        })
        res.send((200), deck)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    addDeck
}