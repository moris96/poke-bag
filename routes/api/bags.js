const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/bags')

//add routes 
//Index /api/bags 
router.get('/', dataController.index, apiController.index)
//Delete /api/bags/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/bags/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/bags 
router.post('/', dataController.create, apiController.show)
// Show /api/bags/:id
router.get('/:id', dataController.show, apiController.show)

module.exports = router 