const express = require('express')
const router = express.Router()

const {addUser, loginUser} = require('../controller/User')

router.post('/add-user', addUser)
router.post('/login', loginUser)
//router.post('/logout', logoutUser)

module.exports = router