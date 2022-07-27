
//globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// defines the view engine
//app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
//import router code from controller
app.use('/places', require('./controllers/places'))


//home route
app.get('/', (req, res) => {
    res.render('home')
})

//wildcard route stays at bottom
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)