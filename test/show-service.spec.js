const ShowService = require('../src/show/show-service')
const knex = require('knex')

describe(`Show List Service object`, function () {
  let db
  let testItems = [
    {
      id: 1,
      showname: 'Game of Thrones',
      startdate: new Date('2029-01-22T16:28:32.615Z').toISOString(),
      finishdate: new Date('2029-01-22T16:28:32.615Z').toISOString(),
     seasons: 2,
      genre: 'Fantasy',
      showdescription: 'dragons and stuff',
      currentseason: 2,
      towatch: true,
      watching: false,
      finish: false,
      showlanguage: 'english'
    },
    {
        id: 2,
        showname: 'BreakingBad',
        startdate: new Date('2029-01-22T16:28:32.615Z').toISOString(),
        finishdate: new Date('2029-01-22T16:28:32.615Z').toISOString(),
       seasons: 2,
        genre: 'Crime drama',
        showdescription: 'Guy makes drugs',
        currentseason: 2,
        towatch: false,
        watching: true,
        finish: false,
        showlanguage: 'english'
      },
      
  ]

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
  })

  before(() => db('shows').truncate())

  afterEach(() => db('shows').truncate())

  after(() => db.destroy())

  context(`Given 'shopping_list' has data`, () => {
    beforeEach(() => {
      return db
        .into('shows')
        .insert(testItems)
    })

    it(`getAllItems() resolves all items from 'shows' table`, () => {
   
      return ShowService.getAllShows(db)
        .then(actual => {
          expect(actual).to.eql(testItems)
        })
    })

    it(`getById() resolves an article by id from 'shopping_list' table`, () => {
      const idToGet = 2
      const secondItem = testItems[idToGet-1]
      return ShowService.getById(db, idToGet)
        .then(actual => {
          expect(actual).to.eql({
           secondItem
          })
        })
    })

    it(`deleteItem() removes an show by id from 'show' table`, () => {
      const showId = 1
      return ShowService.deleteShow(db, showId)
        .then(() => ShowService.getAllShows(db))
        .then(allItems => {
          // copy the test items array without the removed article
          const expected = testItems
            .filter(show => show.id !== showId)
          expect(allItems).to.eql(expected)
        })
    })

    it(`updateItem() updates an show from the 'show' table`, () => {
      const idOfItemToUpdate = 1
      const newItemData = {
        showname: 'A Song Of Ice and Fire',
       
      }
      const originalItem = testItems[idOfItemToUpdate - 1]
      return ShowService.updateShow(db, idOfItemToUpdate, newItemData)
        .then(() => ShowService.getById(db, idOfItemToUpdate))
        .then(show => {
          expect(show).to.eql({
            id: idOfItemToUpdate,
            ...originalItem,
            ...newItemData,
          })
        })
    })
  })

  context(`Given 'show' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return ShowService.getAllShows(db)
        .then(actual => {
          expect(actual).to.eql([])
        })
    })

    it(`insertItem() inserts an article and resolves the article with an 'id'`, () => {
      const newItem = {
        showname: 'Mad Men',
        startdate: new Date('2029-01-22T16:28:32.615Z').toISOString(),
        finishdate: new Date('2029-01-22T16:28:32.615Z').toISOString(),
       seasons: 2,
        genre: 'drama',
        showdescription: 'Advertising stuff',
        currentseason: 2,
        towatch: false,
        watching: true,
        finish: false,
        showlanguage: 'english'
      }
      return ShoppingListService.insertShow(db, newItem)
        .then(actual => {
          expect(actual).to.eql({
            id: 1,
            ...newItem
          })
        })
    })
  })
})