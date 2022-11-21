const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/default.json');

const generarJWT = (payload) => {
    return new Promise( (resolve, reject) => {
        jwt.sign(payload, jwtSecret, {
            expiresIn: '1h',
        }, (err, token) => {
            if(err) {
                reject('No se pudo generar el token: ' + err);
            }

            resolve(token);
        });
    });
}

module.exports = generarJWT;