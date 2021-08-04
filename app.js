const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const app = express()
const apiPort = 8000

// Add headers
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Welcome to the Express Backend. Everything works as expected for now.')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))