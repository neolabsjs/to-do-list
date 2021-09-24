const { Router } = require('express')
const { taskController } = require('../controllers/task.controller')
const router = Router()

router.get('/', taskController.find)
router.post('/create', taskController.create)
router.put('/update/:id', taskController.update)
router.delete('/delete/:id', taskController.delete)

module.exports = router
