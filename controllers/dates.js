const dateRouter = require('express').Router()
const DateSchema = require('../models/date')
const dateUpdateScript = require('../utils/dateUpdateScript')
const config = require('../utils/config')

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

dateRouter.post('/update', async (request, response) => {
  if(!request.body.updateKey) {
    console.log("Error: update key required!")
    return response.status(401).json({error: 'Missing password'})
  }

  const token = request.body.updateKey.password

  if(!token) {
    console.log("Error: update key required!")
    return response.status(401).json({error: 'Missing password'})
  } else if(token.localeCompare(config.SECRET) != 0) {
    console.log("Error: invalid update key!")
    return response.status(401).json({error: 'Password invalid'})
  }

  //Attempt a date update
  const result = await dateUpdateScript.updateDates()
  return response.json({
    "Update success": result
  })
})

module.exports = dateRouter
