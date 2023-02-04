const express = require('express')
const uploads = require('./routes/upload')
require('dotenv').config()

const app = express()

// middleware
app.use(express.json())

app.use('/images/uploads', uploads)

const port = process.env.PORT

const dbConnect = require('./controllers/upload')

const start = async () => {
    try {
        dbConnect
        app.listen(port, console.log(`Server is running on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()
module.exports = dbConnect