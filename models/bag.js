const {Schema, model} = require('mongoose')

const bagSchema = new Schema({
    pokemon: String, 
    items: String, 
    balls: String, 
    keyItems: String, 
    medicine: String, 
    berries: String 
}, {
    timestamps:true 
})

const Bag = model('Bag', bagSchema)

module.exports = Bag
