const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const metaSchema = new mongoose.Schema({
  firstArchivedDate: Date,
  lastUpdated: Date
})

module.exports = mongoose.model('Meta', metaSchema)
