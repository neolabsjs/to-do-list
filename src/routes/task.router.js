const { Router } = require('express')
const { taskController } = require('../controllers/task.controller')
const router = Router()

router.get('/', taskController.find)
router.post('/create', taskController.create)

module.exports = router
