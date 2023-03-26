const express = require('express')
const router = express.Router()

const {addCourse} = require('../controller/Course')
const {protect} = require('../middleware/AuthMiddle')

router.post('/add-course', protect, addCourse)

module.exports = router