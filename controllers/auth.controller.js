const authCtrl = {};
const User = require("../models/User");
const generarJWT = require("../helpers/generarJwt");
const bcrypt = require("bcrypt");

authCtrl.login = async (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({
      msg: "error de autenticación",
    });
  }

  const user = await User.findOne({ userName });

  if (!user?.isActive) {
    return res.status(400).json({
      msg: "error al autenticarse, verifique las credenciales",
    });
  }

  const token = await generarJWT({ uid: user._id });
  await bcrypt.compare(password, user.password).then((response) => {
    if (!response) {
      return res.json({
        msg: "error al autenticarse, verifique su contraseña",
      });
    } else {
      return res.json({
        user,
        token,
      });
    }
  });
};

authCtrl.register = async (req, res) => {
  try {
    const { name, username, password, role, images } = req.body;
    console.log(name, username, password, role,images);
    return
    const passwordHashed = bcrypt.hashSync(password, 10);
    const exist = await User.findOne({ username });
    if (exist) {
      return res
        .status(400)
        .json({ message: "el nombre de usuario ya existe" });
    }
    const nuevoUsuario = new User({
      name,
      username,
      password: passwordHashed,
      role,
    });
    
    await nuevoUsuario.save();
    return res.status(200).json("usuario agregado correctamente");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

authCtrl.authLogin = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};

module.exports = authCtrl;
