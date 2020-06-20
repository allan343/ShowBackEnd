# ShowApp

ShowApp is an application where user can keep track of shows they are planning to watch, watching, and have finished watching

## Prerequisites

ShowApp requires Node.js v6.0+ to run.

ShowApp requires Node.js v6.0+ to run. Install the dependencies and devDependencies and start the server.

```npm install ```

## Starting the server

Start the application `npm start`


Run the tests `npm t`

##  Schema

Show

```
show => ({
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
```

##  API OVERVIEW

##  GET /api/shows/
```
// req.query
{
  ?
}

// res.body

  {
    {
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
}
  }

```

##  POST /api/shows/
```
// req.query
 {
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
}

// res.body

  {
    {
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
}
  }

```

##  GET /api/shows/:show_id
```
// req.query
{
  show_id
}

// res.body
[
  {
    {
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
}
  }
]
```

##  DELETE /api/shows/:show_id
```
// req.query
{
  show_id
}

// res.body
[
  {
    {
    row_deleted    
    }
  }
]
```

##  PATCH /api/shows/:show_id
```
// req.query
{
  show_id
}

// res.body

  {
    {
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
}
  }

```
# Built with

Node, Express, Mocha, Chai

# Authors

Allan Cheng