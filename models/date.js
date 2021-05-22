const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const dateSchema = new mongoose.Schema({
  dateName: String,
  currentDate: Date,
})

module.exports = mongoose.model('Date', dateSchema)
