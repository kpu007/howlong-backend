const dateRouter = require('express').Router()
const Date = require('../models/date')

dateRouter.get('/', async (request, response) => {
  const dates = await Date.find({})
  response.json(dates.map(product => product.toJSON()))
})

dateRouter.get('/:name', async (request, response) => {
  const dates = await Date.find({dateName: request.params.name})
  response.json(dates.map(product => product.toJSON()))
})

module.exports = dateRouter
