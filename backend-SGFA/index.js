require('dotenv').config()
const cors = require('cors');
const express = require('express')
const app = express()
require('./database');
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/newRegistro',async(req,res)=>{
  const {temp,dir} = await req.body;

})

app.listen(port,() => console.log(`servidor corriendo en el puerto ${port}`));