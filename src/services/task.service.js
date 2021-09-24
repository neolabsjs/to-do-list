const TaskModel = require("../models/task.model")

class TaskService {
  find = async () => {
    return await TaskModel.find()
  }

  findOne = async (options) => {
    return await TaskModel.findOne(options)
  }

  create = async (title, deadline) => {
    const exist = await TaskModel.findOne({ title })
    if (exist) {
      throw new Error('Task already exist')
    }
    const task = new TaskModel({
      title, deadline
    })
    return await task.save()
  }

  update = async (id, dto) => {
    const task = await TaskModel.findById(id)
    if (!task) {
      throw new Error('Task is not defined')
    }
    Object.assign(task, dto)
    return await task.save()
  }

  delete = async (id) => {
    try {
      await TaskModel.findByIdAndDelete(id)
    } catch (e) {
      throw new Error('Task is not defined')
    }
  }
}

const taskService = new TaskService()

module.exports = { taskService }
