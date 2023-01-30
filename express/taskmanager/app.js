const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})

// tasks
app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3000

app.listen(port, console.log(`Server is running on port ${port}....`))