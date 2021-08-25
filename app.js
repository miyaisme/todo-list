const express = require('express')
const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})
module.exports = mongoose.mondel('Todo', todoSchema)

const app = express()

mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {
  console.log('App is running on port http://localhost:3000')
})