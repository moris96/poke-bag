const {Schema, model} = require('mongoose')

const bagSchema = new Schema({ 
    items: String, 
    pokeBalls: String, 
    keyItems: String, 
    hasAllBadges: Boolean
}, {
    timestamps:true 
})

const Bag = model('Bag', bagSchema)

module.exports = Bag
