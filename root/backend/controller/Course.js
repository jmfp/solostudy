const CourseModel = require('../models/Course')

const addCourse = async(req, res) =>{
    const course = req.body
    console.log(course)
    try {
        const newCourse = await CourseModel.create(course)
    } catch (error) {
        res.send(error)
    }
}

module.exports={
    addCourse
}