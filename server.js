const express = require('express')
const path = require('path')
// const users = require('./routes/users')

const server = express()

// public to get index.html and bundles
server.use(express.static(path.join(__dirname, './public')))


// Middleware
server.use(express.json())

// Routes
// server.use('/users', users)

module.exports = server
