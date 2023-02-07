const express = require('express')
const router = express.Router()

const {addCard} = require('../controller/Card')

router.post('/add-card', addCard)

module.exports = router