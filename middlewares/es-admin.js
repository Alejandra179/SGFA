
const esAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(401).json({
            msg:'No autorizado - No eres administrador'
        })

    }

    next();
}


module.exports = esAdmin;
