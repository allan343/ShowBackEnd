require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const config = require('./config')
const NODE_ENV= config.NODE_ENV
const showroute = require('./show/show-router')
//const noteroute = require('./notes/notes-router')


const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use('/shows',showroute)
//app.use('/notes',noteroute)
app.get('/', (req, res) => {
       res.send('Hello, world!')
     })
    

     app.use(function errorHandler(error, req, res, next) {
           let response
          
           res.status(500).json(response)
         })



module.exports = app