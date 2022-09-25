require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routers = require('./routers/table.router')

const app = express()
const PORT = process.env.PORT || 3005

app.use(cors())
app.use(routers)

app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT} порту`)
})
