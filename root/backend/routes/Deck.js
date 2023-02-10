const express = require('express')
const router = express.Router()

const {addDeck, getDeck, getDecks} = require('../controller/Deck')
const {protect} = require('../middleware/AuthMiddle')

router.post('/add-deck', protect, addDeck)
router.get('/get-deck/:id', protect, getDeck)
router.get('/get-decks/:id', protect, getDecks)

module.exports = router