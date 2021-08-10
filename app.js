const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.json()) // for parsing application/json

const models = require("./models");
const db = require('./db')
// routes

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const apiPort = 8000
// Add headers

app.get('/', (req, res) => {
    res.send('Welcome to the Express Backend. Everything works as expected for now.')
})

app.post('/test', (req, res) => {
    res.json(req.body);
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))