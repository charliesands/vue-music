let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
  trackPrice: {
    type: Number,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },
  trackCensoredName: {
    type: String,
    required: true
  },
  collectionName: {
    type: String,
    required: true
  },
  artworkUrl100: {
    type: Number,
    required: true
  },
  previewUrl: {
    type: String,
    required: true
  },
  trackId: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model(schemaName, schema)