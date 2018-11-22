const express = require('express')

const messages = require('./routes/messages')

const server = express()

// Middleware
server.use(express.json())

// Routes
server.use('/messages', messages)

module.exports = server
