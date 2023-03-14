const  {model, Schema} = require('mongoose')

const ComedorSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    address: {
<<<<<<< HEAD
        street: {
            type: String,
            required: true
        },
        number: Number,
        neighborhood: {
            type: String,
            required: true
        }
=======
        street:{
            type:String,
            required:true,   
        },
        number: Number,
        
        neighborhood: String
>>>>>>> a30e0c9a1bacdcad4931710f321d82bb707f4391

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