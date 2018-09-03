let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
  trackPrice: {
    type: String
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
    type: Number
  },
  previewUrl: {
    type: String
  },
  trackId: {
    type: String
  }
})

module.exports = mongoose.model(schemaName, schema)