const express = require('express')
//const xss = require('xss')
const ShowsService = require('./show-service')

const showsRouter = express.Router()
const jsonParser = express.json()

const serializeShow = show => ({
  id: show.id,
  showname: show.showname,
  startdate: show.startdate,
  finishdate: show.finishdate,
  genre: show.genre,
  seasons: show.seasons,
  showdescription: show.showdescription,
  showlanguage: show.showlanguage,
  currentseason: show.currentseason,
  towatch: show.towatch,
  watching: show.watching,
  finish: show.finish
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
   /*const {  showname,startdate,finishdate, genre,seasons,showdescription,showlanguage,currentseason } = req.body
   let newShow = {
    showname : showname,
    startdate : startdate,
    finishdate : finishdate,
    genre: genre,
    seasons: seasons,
    showdescription:showdescription,
    showlanguage:showlanguage,
    currentseason: currentseason
}*/
const newShow = req.body
console.log("show",newShow)
console.log("beforestardate",newShow.startdate)

    if(newShow.startdate=="")
    {
      newShow.startdate=null
      console.log("stardate",newShow.startdate)
    }

    if(newShow.finishdate=="")
    {
      newShow.finishdate=null
      console.log("fdate",newShow.finishdate)
    }

    //const newShow = req.body
    ShowsService.insertShow(
      req.app.get('db'),
      newShow
    )
      .then(newShow => {
        res
          .status(201)
          .json(serializeShow(newShow))
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
        res.status(200).json({numRowsAffected})
      })
      .catch(next)
  })

   .patch(jsonParser, (req, res, next) => {
    
    console.log("body",req.body)
    


    const newShow = req.body
    console.log("patch",newShow)
    newShow.id=req.params.show_id

    if(newShow.startdate=="")
    {
      newShow.startdate=null
      console.log("stardate",newShow.startdate)
    }

    if(newShow.finishdate=="")
    {
      newShow.finishdate=null
      console.log("fdate",newShow.finishdate)
    }
    //const showToUpdate =  newShow.showname 
    /*
    const numberOfValues = Object.values(showToUpdate).filter(Boolean).length
          if (numberOfValues === 0) {
            return res.status(400).json({
              error: {
                message: `Request body must contain either 'title', 'style' or 'content'`
              }
            })
          }
    */
       ShowsService.updateShow(
         req.app.get('db'),
      newShow.id,
         newShow
       )
         .then(numRowsAffected => {
         
           ShowsService.getById( req.app.get('db'), newShow.id )
            .then(show => { res.status(200).json(serializeShow(show)) })



         })
         .catch(next)
      })
     



module.exports = showsRouter