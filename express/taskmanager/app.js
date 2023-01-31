const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public'));
app.use(express.json())

// tasks
app.use('/api/v1/tasks', tasks)

const port = process.env.PORT

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()