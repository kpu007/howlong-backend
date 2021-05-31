const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const dateSchema = new mongoose.Schema({
  dateName: String,
  currentDate: Date,
  dateArray: [{
    archivedDateTime: Date,
    archivedDateValue: Date
  }],
  lastUpdated: Date
})

module.exports = mongoose.model('Date', dateSchema)
