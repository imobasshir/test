const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('<h3 style="text-align: center">404 Not Found</h3>')
})

app.listen(5000, () => {
    console.log(`Server is listening on port 5000.....`)
})

// 5; 03; 05