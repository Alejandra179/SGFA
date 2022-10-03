const express = require('express')
const router = express.Router()
const { check} = require('express-validator')

const { login, postUser } = require('../controllers/user.controller')
const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo'
router.post('/login',login) 
router.post('/',
[
    check('name', '-el nombre es requerido-').not().isEmpty().withMessage(mensajeValidacion)
    .isString().withMessage(mensajeVal),
    check('password', '-el password debe ser de un minimo de 6 caracteres-').isLength({min:6})
    .not().isEmpty().withMessage(mensajeValidacion)
    .isString().withMessage(mensajeVal)
]
,postUser)

module.exports = router