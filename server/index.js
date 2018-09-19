const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./controller')

const app = express()

app.use(bodyParser.json())
app.use(cors())

//endpoints
app.get('/api/animals', controller.read)
app.post('/api/animals', controller.create)





app.listen(3005, () => {
  console.log('listening on 3005')
})

