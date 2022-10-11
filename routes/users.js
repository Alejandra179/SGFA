const express = require('express')
const router = express.Router()
const { check} = require('express-validator')
const { login, postUser, putUser, deleteUser } = require('../controllers/user.controller');
const validationFields = require('../helpers/validationFields');

router.post('/login',login) 
router.post('/add',
[
    check('name', '-el nombre es requerido-').not().isEmpty()
    .isString().withMessage("nombre invalido"),
    check('password', '-el password debe ser de un minimo de 6 caracteres-').isLength({min:6})
    .not().isEmpty().isString().withMessage("password invalid"),
    validationFields
]
,postUser)
router.put("/update",putUser)
router.delete("/delete",deleteUser)

module.exports = router