let router = require('express').Router()
let Songs = require('../models/Song.js')

router.get('/', (req, res, next) => {
  Songs.find({})
    .then(slist => {
      res.send(slist)
    }).catch(next)
})

router.post('/', (req, res, next) => {
  Songs.create(req.body)
    .then(song => {
      res.send(song)
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
  Songs.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: "Success"
    })).catch(next)
})

router.delete('/:id', (req, res, next) => {
  Songs.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: "Deleted"
    })).catch(next)
})

module.exports = router