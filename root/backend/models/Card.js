const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

const CardModel = mongoose.model("Cards", CardSchema)
module.exports = CardModel