Name of app: ShowApp

Link to app: https://show.allanhfcheng.now.sh

Description of App:

This app allows the user to add shows they plan to watch, currently watching, and shows they have already watched.   This is represented in the three tabs: To Watch, Watching, and Finished.  

A show can be moved to these three states.  Each show has the following:

Title,
Genre,
Number of Seasons,
Description,
Language of show.

A show in the Watching state has a start date and a current season
A show in the Finished state has a finished date.

In each tab (To Watch, Watching, Finished), you can search for the shows in that state.

App Screenshots and instructions:

At the app homescreen click on Add Show.
![](imagesForReadMe/AddShow.PNG)

Enter show details and click save.
![](imagesForReadMe/ShowDetails.PNG)


Select the show's state.
![](imagesForReadMe/ShowState.PNG)

You now have the show listed under the state you set it to (To Watch, Watching Finished)
![](imagesForReadMe/AddedShow.PNG)

Click on a show to enter show Information page
![](imagesForReadMe/ShowInformation.PNG)

On the same page as the previous step (Informatin page) click on "Update" or "Edit"
Update allows you to change state of show.
Edit allows you to edit show details
![](imagesForReadMe/UpdateDetails.PNG)
![](imagesForReadMe/EditDetails.PNG)


The Nav at the top allows you to look at shows in different states.
![](imagesForReadMe/ShowStateNavigation.PNG)

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