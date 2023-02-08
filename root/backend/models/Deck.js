const mongoose = require("mongoose")

const DeckSchema = new mongoose.Schema({
    deckOwner: String,
    deckName: {
        type: String,
        required: true
    },
    cardsInDeck:[{}]
}, 
{
    timestamps: true
})

const DeckModel = mongoose.model("Decks", DeckSchema)
module.exports = DeckModel