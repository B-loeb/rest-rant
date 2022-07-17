require ('dotenv').config()
const express = require('express')
const { get } = require('http')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello cruel world!')
})
//wildcard route stays at bottom
app get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)
