const {Schema, model} = require('mongoose')

const bagSchema = new Schema({ 
    items: String, 
    pokeBalls: String, 
    keyItems: String, 
    medicine: String, 
    berries: String 
}, {
    timestamps:true 
})

const Bag = model('Bag', bagSchema)

module.exports = Bag
