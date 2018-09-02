let mongoose = require('mongoose')
const connectionString = "mongodb://user01:user01@ds018568.mlab.com:18568/vue-music"
let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

connection.once('open', () => {
  console.log("Connected to Database")
})