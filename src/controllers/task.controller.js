const { taskService } = require("../services/task.service")

class TaskController {
  constructor(service) {
    this.service = service
  }

  find = async (req, res) => {
    const result = await this.service.find()
    res.json({ result })
  }

  create = async (req, res) => {
    const { title, deadline } = req.body
    try {
      const task = await this.service.create(title, deadline)
      res.json({ task })  
    } catch (e) {
      res.status(409).json({ message: e.message })
    }
  }

  update = async (req, res) => {
    const { id } = req.params
    const dto = req.body
    try {
      const result = await this.service.update(id, dto)
      res.json({ result })
    } catch (e) {
      res.status(404).json({ message: e.message })
    }
  }

  delete = async (req, res) => {
    const { id } = req.params

    try {
      await this.service.delete(id)
      res.json({ success: true })
    } catch (e) {
      res.status(404).json({ message: e.message })
    }
  }
}

const taskController = new TaskController(taskService)

module.exports = { taskController }
