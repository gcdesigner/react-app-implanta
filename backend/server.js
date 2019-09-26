const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

app = express()
app.use(express.json())
app.use(cors())

// Connect DB
mongoose.connect("mongodb://localhost:27017/api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
requireDir("./src/models")

// Routes
app.use('/api', require("./src/routes"))

app.listen(3002)