const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: String,
    email: String,
    hobbies: [String],
    college: String,
    enterData: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;