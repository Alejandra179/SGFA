const { response, request } = require("express");
const config = require('config')
const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = config.get('jwtSecret')
// Función para validar los tokens recibidos en las rutas protegidas
module.exports = function (req = request, res = response, next) {
    // Se almacena el token recibido del cliente
    const token = req.header('authorization');
    
    // Se verifica si el token existe en la petición
    if(!token){
        return res.status(400).json({
            msg:'Token inválido'
        })
    };
    
    // Se decodifica el token para obtener el uid y luego buscar el usuario
    try {
        const { uid } = jwt.verify(token, secret)
        console.log("iud: ",uid)
        

        // Buscar el usuario con la base de datos y luego se verifica si existe
        const user = Users.findById(uid);

        if(!user){
            return res.status(401).json({
                msg:'Token inválido - usuario no existe'
            })
        }

        // Se verifica si el usuario está activo
        if(!user.active){
            return res.status(401).json({
                msg:'Token inválido - usuario no existe'
            })
        }

        // Se añaden los datos del usuario a la petición para que pueda ser leído
        // por los siguientes middlewares
        req.user = user;

        // Continuar al siguiente middleware
        next()
    } catch (error) {
        console.log('Error al verificar token: ', token, error);
        return res.status(401).json({
            msg:'Token inválido - Error al verificar token'
        })
    }
    
    next();
}


