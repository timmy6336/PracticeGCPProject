const path = require('path')
const express = require('express')

const app = express()
constport = process.env.PORT || 3000

const public = path.join(__dirname,'../public')

app.use(express.json())
app.use(express.static(public))

app.use('/users',require('./routes/users.js'))

module.exports = app