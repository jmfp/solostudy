const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    sections: [{
        
    }]
}, 
{
    timestamps: true
})

const CourseModel = mongoose.model("Courses", CourseSchema)
module.exports = CourseModel