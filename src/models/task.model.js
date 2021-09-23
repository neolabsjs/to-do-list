const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  deadline: Date,
})

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel
