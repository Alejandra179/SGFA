const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult} = require('express-validator')
const config = require('config')
const jwt = require('jsonwebtoken')
const  bcrypt = require('bcryptjs')
const User = require('./../models/User');


router.get('/', async (req, res) => {
    
    try {
        const user = await User.findById(req.user.id)
        return res.json(user)
    } catch (error) {
        console.error(error.message)
        return res.json(error.message)
    
    }
    
})


router.post('/', 
[
check('password', '-password requerido-').exists()
],
async (req, res) => {
    //console.log(req. body)
    const { userName, password } = req.body

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors :  errors.array()})
    }

   //check user existence
    try {
        let user = await User.findOne({userName})
        if(!user){
            return res.json("usuario no encontrado")  
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){ 
            return res.status(400).json('las credenciales no son correctas') 
        }

        //return jsonwebtoken
        
        const payload = {
            user : {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn: 3600},
            (err, token) => {
                if(err) res.json(err.message)
                return res.json({token})
            })
       

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }


   
})


module.exports = router