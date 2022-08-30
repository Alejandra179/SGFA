import React, { useState } from 'react'

const FormLogin = () => {

  const [user,setUser] = useState({nameUser:"",
                                    password:""})

  const validarUser = (e)=>{
    e.preventDefault()
    console.log(user)
    //realizar peticion fetch
    return true
  }



  return (
    <div className='card'>
      <div className='card-header'>Login</div>
      <div className='card-body'>
      <form onSubmit={validarUser}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Nombre de usuario</label>
          <input type="text" className="form-control" id="nameUser" name="nameUser" aria-describedby="emailHelp" 
          value={user.nameUser} 
          onChange={(e)=>setUser({...user,nameUser:e.target.value})} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" value={user.password}
          onChange={(e)=>setUser({...user,password:e.target.value})} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      </div>

    </div>
  )
}

export default FormLogin