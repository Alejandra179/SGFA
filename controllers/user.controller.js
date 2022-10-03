const User = require("../models/User");
const bcrypt = require("bcrypt");
const generarJWT = require("../helpers/generarJwt")

const ctrlUser = {}

ctrlUser.login = async (req, res) =>{
    const {userName, password} = req.body;

    if(!username || !password){
        return res.status(400).json({
            msg:'error de autenticación'
        })
    }

    const user = await User.findOne({userName, password});

    if(!user.isActive){
        return res.status(400).json({
            msg: 'error al autenticarse, verifique las credenciales'
        })
    }

    const token = await generarJWT({uid: user._id});

    return res.json({
        user,
        token
    })

}

ctrlUser.postUser = async (req, res)=>{
    const { name, userName, password, role } = req.body;

    const passwordHashed = bcrypt.hashSync(password, 10);

    const nuevoUsuario = new User({
        name,
        userName,
        password: passwordHashed,
        role
    })

    try{
        const usuarioCreado = await nuevoUsuario.save();
        return res.json({usuarioCreado})
    }catch(error){
        return res.status(400).json({
            msg: 'error al crear el usuario'
        })
    }

}


module.exports = ctrlUser;
