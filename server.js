const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());

const usersRoutes = require("./routes/users");
const listasRoutes = require("./routes/listas");
const comedoresRoutes = require("./routes/comedores");
const productosRoutes = require("./routes/productos");
const authRoutes = require("./routes/auth");


//iniciamos el mware
app.use(express.json({ extended: false }));

//conectamos a db
connectDB();
//test


//routes

app.use("/users", usersRoutes);
app.use("/comedores", comedoresRoutes);
app.use("/listas", listasRoutes);
app.use("/productos", productosRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto: ${PORT}`);
});
