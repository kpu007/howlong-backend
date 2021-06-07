const dateRouter = require('express').Router()
const DateSchema = require('../models/date')

dateRouter.get('/', async (request, response) => {
  const dates = await DateSchema.find({})
  response.json(dates.map(date => date.toJSON()))
})

dateRouter.get('/:name', async (request, response) => {
  const dates = await DateSchema.find({dateName: request.params.name})
  response.json(dates.map(date => date.toJSON()))
})

dateRouter.get('/archive/:date', async (request, response) => {

  const getBeginningOfDay = (date) => {
    return date.setHours(0, 0, 0, 0).valueOf()
  }

  const extractDate = (date, translatedDate) => {
    const matchedDate = date.dateArray.find(element => element.archivedDateTime ? (getBeginningOfDay(element.archivedDateTime) == translatedDate) : false)

    return {
      dateName: date.dateName,
      dateValue: matchedDate ? matchedDate.archivedDateValue : "No data found!"
    }
  }

  //need to convert the parameter from a string to a number
  const translatedDate = getBeginningOfDay(new Date(parseInt(request.params.date, 10)))
  const dates = await DateSchema.find({})

 
  const result = dates.map(date => extractDate(date, translatedDate))
  console.log(result)
  response.json(result)
})

module.exports = dateRouter
