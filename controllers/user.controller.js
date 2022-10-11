const User = require("../models/User");
const bcrypt = require("bcrypt");
const generarJWT = require("../helpers/generarJwt");

const ctrlUser = {};

ctrlUser.login = async (req, res) => {
  const { userName, password} = req.body;

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

ctrlUser.postUser = async (req, res) => {
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
     await User.save() 
     return res.status(200).json("usuario agregado correctamente")
  
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

ctrlUser.putUser = async (req, res) => {
  const id = req.params.id_usuario;
  const { password, userName } = await req.body;

  try {
    const user = (await User.findByIdAndUpdate(
      { _id: id },
      { password, userName }
    )(!user))
      ? res.json("no se pudo actualizar correctamente")
      : res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};
ctrlUser.deleteUser = async (req, res) => {
  const id = req.params.id_usuario;
  try {
    const response = await User.findByIdAndDelete(id);
    return res.status(200).json({message:"user deleted successfully"});
  } catch (err) {
    return res.json(err.message);
  }
};

module.exports = ctrlUser;
