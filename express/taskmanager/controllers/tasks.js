const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        console.log(error)
    }
    // res.send('get all tasks')
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        console.log(error)
    }
    // res.send('create a task')
    // res.json(req.body)
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: 'No task found' })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
    // res.send('get a task')
    // res.json({ id: req.params.id })
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: 'No task found' })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
    // res.send('update a task')
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: 'No task found' })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
    // res.send('delete a task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
