const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')

// app.get('/api/v1/tasks') - GET all tasks
// app.post('/api/v1/tasks') - Create a new task
router.route('/').get(getAllTasks).post(createTask)

// app.get('/api/v1/tasks/:id') - GET a single task
// app.patch('/api/v1/tasks/:id') - Update a task
// app.put('/api/v1/tasks/:id') - Update a task
// app.delete('/api/v1/tasks/:id') - Delete a task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router