//entrypoint for api
const express = require('express')
const cors = require('cors')

//dotenv for environment variables
require('dotenv').config()

//connect to mongoose db
const connectDB = require('./database/db')
connectDB()

const app = express()
//adding middleware for body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//app.get('/', (req, res) => { res.send('Hello from Express!')})
app.use('/api/products', require("./routes/Products"))
app.use('/api/users', require('./routes/Users'))
app.use('/api/decks', require('./routes/Deck'))
app.use('/api/cards', require('./routes/Card'))
app.use('/api/courses', require('./routes/Course'))

app.listen(process.env.PORT || 5000, () =>{
    console.log(`server running on port ${process.env.PORT}`)
})