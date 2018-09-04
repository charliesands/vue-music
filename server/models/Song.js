let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
  trackPrice: {
    type: Number
  },
  artistName: {
    type: String
  },
  trackCensoredName: {
    type: String
  },
  collectionName: {
    type: String
  },
  artworkUrl100: {
    type: String
  },
  previewUrl: {
    type: String
  },
  trackId: {
    type: Number
  }
})

module.exports = mongoose.model(schemaName, schema)