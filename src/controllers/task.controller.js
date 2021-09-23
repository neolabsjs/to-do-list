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
      res.status(409).json({ message: 'Task already exist' })
    }
  }

  update = async () => {}
  delete = async () => {}
}

const taskController = new TaskController(taskService)

module.exports = { taskController }
