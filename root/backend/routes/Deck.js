const express = require('express')
const router = express.Router()

const {addDeck} = require('../controller/Deck')

router.post('/add-deck', addDeck)

module.exports = router