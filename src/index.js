const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const taskRouter = require('./routes/task.router')

const PORT = 5000
const app = express()
app.use(bodyParser.json())

app.use('/', taskRouter)

app.listen(PORT, async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin123@cluster.i68cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log(`Server has been started on port ${PORT}`)
  } catch(e) {
    console.log(e)
  }
})
