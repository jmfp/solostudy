const express = require('express')
const router = express.Router()

const {addCard, deleteCard} = require('../controller/Card')

router.post('/add-card', addCard)
router.delete('/delete-card', deleteCard)

module.exports = router