const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const save = require('./routes/save')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('html'))


app.use('/save', save)

app.listen(3000)
