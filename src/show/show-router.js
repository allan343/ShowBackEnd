const express = require('express')
//const xss = require('xss')
const ShowsService = require('./show-service')

const showsRouter = express.Router()
const jsonParser = express.json()

const serializeShow = show => ({
  id: show.id,
  showname: show.name,
  startdate: show.startdate,
  finishdate: show.finishdate,
  genre: show.genre,
  seasons: show.seasons,
  showdescription: show.showdescription,
  showlanguage: show.language,
  currentseason: show.currentseason
})

showsRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    ShowsService.getAllShows(knexInstance)
      .then(shows => {
        res.json(shows.map(serializeShow))
      })
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
   // const {  showname,startdate,finishdate, genre,seasons,showdescription,showlanguage,currentseason } = req.body
    
    const newShow = req.body
    ShowsService.insertShow(
      req.app.get('db'),
      newShow
    )
      .then(show => {
        res
          .status(201)
          .json(serializeShow(show))
      })
      .catch(next)
  })

showsRouter
  .route('/:show_id')
  .all((req, res, next) => {
    ShowsService.getById(
      req.app.get('db'),
      req.params.show_id
    )
      .then(show => {
        if (!show) {
          return res.status(404).json({
            error: { message: `Show doesn't exist` }
          })
        }
        res.show = show
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializeShow(res.show))
  })
  .delete((req, res, next) => {
    ShowsService.deleteShow(
      req.app.get('db'),
      req.params.show_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })

   .patch(jsonParser, (req, res, next) => {
    
    const newShow = req.body
    newShow.id=req.params.show_id
    const showToUpdate =  newShow.showname 
    const numberOfValues = Object.values(showToUpdate).filter(Boolean).length
          if (numberOfValues === 0) {
            return res.status(400).json({
              error: {
                message: `Request body must contain either 'title', 'style' or 'content'`
              }
            })
          }
    
       ShowsService.updateShow(
         req.app.get('db'),
      newShow.id,
         newShow
       )
         .then(numRowsAffected => {
           res.status(204).end()
         })
         .catch(next)
      })

module.exports = showsRouter