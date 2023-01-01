const Bag = require('../../models/bag')

const dataController = {
    // Index,
    index (req, res, next) {
      Bag.find({}, (err, foundBags) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.bags = foundBags
          next()
        }
      })
    },
    // Destroy
    destroy (req, res, next) {
      Bag.findByIdAndDelete(req.params.id, (err, deletedBag) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.bag = deletedBag
          next()
        }
      })
    },
    // Update
    update (req, res, next) {
      req.body.readyToEat = req.body.readyToEat === 'on'
      Bag.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBag) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.bag = updatedBag
          next()
        }
      })
    },
    // Create
    create (req, res, next) {
      req.body.readyToEat = req.body.readyToEat === 'on'
     
      Bag.create(req.body, (err, createdBag) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.bag = createdBag
          next()
        }
      })
    },
    // Edit
    // Show
    show (req, res, next) {
      Bag.findById(req.params.id, (err, foundBag) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find a poke bag with that ID'
          })
        } else {
          res.locals.data.bag = foundBag
          next()
        }
      })
    }
  }
  
  const apiController = {
      index (req, res, next) {
        res.json(res.locals.data.bags)
      },
      show (req, res, next) {
        res.json(res.locals.data.bags)
      }
    }
  
  module.exports = { dataController, apiController }