const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/bags')

//add routes 
//Index /api/pokebags 
router.get('/', dataController.index, apiController.index)
//Delete /api/pokebags/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/pokebags/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/pokebags 
router.post('/', dataController.create, apiController.show)
// Show /api/pokebags/:id
router.get('/:id', dataController.show, apiController.show)

module.exports = router 