require('dotenv').config()
const express = require('express')
const app = express()
//import rouuter code from controller
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})
//wildcard route stays at bottom
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
