const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const metaSchema = new mongoose.Schema({
  firstArchivedDate: Date
})

module.exports = mongoose.model('Meta', metaSchema)
