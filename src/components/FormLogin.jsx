import React from 'react'

const FormLogin = () => {
  return (
    <div className='card'>
      <div className='card-header'>Login</div>
      <div className='card-body'>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Nombre de usuario</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
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