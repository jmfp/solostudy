const express = require('express')
const router = express.Router()

const {addDeck, getDeck, getDecks} = require('../controller/Deck')

router.post('/add-deck', addDeck)
router.get('/get-deck/:id', getDeck)
router.get('/get-decks/:id', getDecks)

module.exports = router