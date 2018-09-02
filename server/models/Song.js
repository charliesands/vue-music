let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
  title: {
    type: String,
    required: true
  },
  albumArt: {
    type: String
  },
  artist: {
    type: String,
    required: true
  },
  albumCollection: {
    type: String
  },
  price: {
    type: Number
  },
  preview: {
    type: String
  },
  id: {
    type: String
  }
})

module.exports = mongoose.model(schemaName, schema)