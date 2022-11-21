const User = require("../models/User");

const ctrlUser = {};

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
