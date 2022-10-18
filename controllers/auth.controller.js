const authCtrl = {};
const User = require("../models/User")
const generarJWT = require("../helpers/generarJwt");
const bcrypt = require("bcrypt");

authCtrl.login = async (req, res) => {
  const { userName, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      msg: "error de autenticación",
    });
  }

  const user = await User.findOne({ userName, password });

  if (!user.isActive) {
    return res.status(400).json({
      msg: "error al autenticarse, verifique las credenciales",
    });
  }

  const token = await generarJWT({ uid: user._id });

  return res.json({
    user,
    token,
  });
};


authCtrl.register = async (req, res) => {
    const { name, userName, password, role } = req.body;
   
    const passwordHashed = bcrypt.hashSync(password, 10);
    const exist = await User.findOne({userName:userName})
  
    try {
      const nuevoUsuario = new User({
        name,
        userName,
        password: passwordHashed,
        role
      });
      if(!exist){
        return res.status(400).json({message:"el nombre de usuario ya existe"})
        
      }
       await User.save(nuevoUsuario) 
       return res.status(200).json("usuario agregado correctamente")
    
    } catch (error) {
      return res.status(400).json(error.message);
    }
  };

  module.exports = authCtrl