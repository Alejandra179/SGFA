const express = require('express')
const { default: helmet } = require('helmet')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()

const PORT = process.env.PORT || 5000


app.use(helmet())
app.use(cors())

const usersRoutes = require('./routes/users')
const listasRoutes = require('./routes/listas')
const comedoresRoutes = require('./routes/comedores')
const productosRoutes = require('./routes/productos')


//const auth = require('./middleware/auth')

//iniciamos el mware
app.use(express.json({extended : false}))

//conectamos a db
connectDB()
//test
app.get('/test', (req, res) => res.send('BEnd api rest activo') )

//routes

app.use('/api/users', usersRoutes)
app.use('/api/comedores',  comedoresRoutes)
app.use('/api/listas',  listasRoutes)
app.use('/api/productos',  productosRoutes)


app.listen(PORT , () => {
   console.log(`servidor iniciado en el puerto: ${PORT}`)
})