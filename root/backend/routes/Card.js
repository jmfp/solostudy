const express = require('express')
const router = express.Router()

const {addCard, deleteCard} = require('../controller/Card')
const {protect} = require('../middleware/AuthMiddle')

router.post('/add-card', protect, addCard)
router.delete('/delete-card', protect, deleteCard)

module.exports = router