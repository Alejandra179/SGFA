const  {model, Schema} = require('mongoose')

const ComedorSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    address: {
        street: String,
        number: Number,
        neighborhood: String

    },
    responsable: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } 

},{
    timestamps:true
})

module.exports = model('comedor', ComedorSchema)