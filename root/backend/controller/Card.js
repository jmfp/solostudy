const CardModel = require('../models/Card')

const addCard = async (req, res) =>{
    const {front, back} = req.body
    const deck = await CardModel.create({
        front,
        back
    })
}

module.exports = {
    addCard
}