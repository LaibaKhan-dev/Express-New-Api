const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT

app.use(express.json())
app.use('/api', require('./api/products/router'))
app.use('/api', require('./api/users/router'))


mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("DATABASE CONNECTED"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})