import React from 'react'
import signIn from '../apis/auth';

export const FormLogin = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        dataUser = Object.formEntries(formData);
        const res = await signIn(dataUser);
        console.log(res)
    }
  return (
    <div className='d-flex justify-content-center'>
      

      <div className='card'>
        <div className='card-header'>
          <div className="text-center">
            <img src="/images/logo.jpeg" className="rounded" alt="logo fundacion"/>
          </div>
          <div className='container'>
            {(user.nameUser=="" || user.password=="")?(<div class="alert alert-warning alert-dismissible fade show" role="alert">
                Usuario o Contraseña incorrecta
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>):""
            }
          </div>
        </div>
        <div className='card-body'>
        <form onSubmit={validarUser}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario</label>
            <input type="text" className="form-control" id="nameUser" name="nameUser" aria-describedby="emailHelp" 
            value={user.nameUser} 
            onChange={(e)=>setUser({...user,nameUser:e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})} />
          </div>
          
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>

      </div>
    </div>
  )
}
