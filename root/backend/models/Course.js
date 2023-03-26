const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    courseName: String,
    sections: [{
        lessons: [{
            name: String,
            video_url: String,
            tests: [{
                questions: [{
                    question: String,
                    answers: [{
                        answer: String,
                        isCorrect: Boolean
                    }]
                }]
            }]
        }]
    }]
}, 
{
    timestamps: true
})

const CourseModel = mongoose.model("Courses", CourseSchema)
module.exports = CourseModel