const express = require('express')
const router = express.Router()

const {addDeck, getDeck, getDecks, deleteDeck} = require('../controller/Deck')
const {protect} = require('../middleware/AuthMiddle')

router.delete('/delete-deck', protect, deleteDeck)
router.post('/add-deck', protect, addDeck)
router.get('/get-deck/:id', protect, getDeck)
router.get('/get-decks/:id', protect, getDecks)

module.exports = router