const  {model, Schema} = require('mongoose')

const ComedorSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: Number,
        neighborhood: {
            type: String,
            required: true
        }

    },
    responsable: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    images:{
        type:Array
    } 

},{
    timestamps:true
})

module.exports = model('comedores', ComedorSchema)