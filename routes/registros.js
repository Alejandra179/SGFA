const router = require('express').Router()
const conexion = require('./config/conexion')

// asignamos las rutas


// get estaciones 

router.get('/', (req,res)=>{
    let sql = 'select * from estaciones'
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//agregar medicion de sensores

router.post("/", async(req,res)=>{
    const { temp, hume, prec, dir, vel, estacion} = await req.body;
    let sql= `insert into sensores(temperatura_sensores,
                humedad_sensores,precipitacion_sensores,
                direcc_viento_sensores,
                veloc_viento_sensores,
                rela_estaciones) values
                ('${temp}','${hume}','${prec}','${dir}','${vel}','${estacion}')`

    try {
        conexion.query(sql,(error,result)=>{
            (error)? error: result
        })
        
    } catch (error) {
        return error
        
    }
})

// -------------------

module.exports = router;