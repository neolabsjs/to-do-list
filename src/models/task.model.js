const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false
  },
  deadline: Date,
})

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel
