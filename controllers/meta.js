const metaRouter = require('express').Router()
const Meta = require('../models/meta')

metaRouter.get('/', async (request, response) => {
    const meta = await Meta.findOne({})
    response.json(meta)
})

module.exports = metaRouter