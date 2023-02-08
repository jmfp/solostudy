const DeckModel = require('../models/Deck')

const addDeck = async (req, res) =>{
    const {deckOwner, deckName, cards} = req.body
    try {
        const deck = await DeckModel.create({
            deckOwner,
            deckName,
            cards
        })
        res.send((200), deck)
    } catch (error) {
        res.send(error)
    }
}

const getDeck = async (req, res) =>{
    console.log(req.params)
    try{
        const deck = await DeckModel.findOne({_id: req.params.id})
        res.send((200), deck)
    } catch (error){
        res.send(error)
    }
}

const getDecks = async (req, res) =>{
    console.log(req.params)
    try{
        const deck = await DeckModel.find({deckOwner: req.params.id})
        res.send((200), deck)
    } catch (error){
        res.send(error)
    }
}

module.exports = {
    addDeck,
    getDeck,
    getDecks
}