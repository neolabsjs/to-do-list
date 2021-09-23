const TaskModel = require("../models/task.model")

class TaskService {
  find = async () => {
    return await TaskModel.find()
  }

  findOne = async (options) => {
    return await TaskModel.findOne(options)
  }

  create = async (title, deadline) => {
    const exist = this.findOne({ title })
    if (exist) {
      throw new Error()
    }
    const task = new TaskModel({
      title, deadline
    })
    return await task.save()
  }

  update = async () => {}
  delete = async () => {}
}

const taskService = new TaskService()

module.exports = { taskService }
