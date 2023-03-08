const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    deck: String,
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

const CourseModel = mongoose.model("Courses", CourseSchema)
module.exports = CourseModel