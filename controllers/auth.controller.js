const authCtrl = {};
const User = require("../models/User");
const generarJWT = require("../helpers/generarJwt");
const bcrypt = require("bcrypt");

authCtrl.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(200).json({
      message: "error de autenticación",
    });
  }

  const user = await User.findOne({ username });

  if (!user?.isActive) {
    return res.status(200).json({
      message: "error al autenticarse, verifique las credenciales",
    });
  }

  const token = await generarJWT({ uid: user._id });
  await bcrypt.compare(password, user.password).then((response) => {
    if (!response) {
      return res.json({
        message: "error al autenticarse, verifique su contraseña",
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
  const { name, username, password, role } = req.body;
  console.log(name, username, password, role );
  try {
    const passwordHashed = bcrypt.hashSync(password, 10);
    const exist = await User.findOne({ username });
    console.log(exist)
    if (exist) {
      return res
        .status(200)
        .json({ message: "el nombre de usuario ya existe" });
    }
    const nuevoUsuario = new User({
      name,
      username,
      password: passwordHashed,
      role,
    });
    console.log(nuevoUsuario)
    await nuevoUsuario.save();
    const token = await generarJWT({ uid: user._id });
    return res.json({
      token
    });
  } catch (error) {
    return res.status(200).json(error.message);
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
