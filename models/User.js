const  { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    tipo_usuario: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('user', UserSchema)