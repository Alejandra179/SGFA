import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div class="mb-5 mt-0">
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
                <img src="/images/logo.jpeg" alt="logo" width="70" height="64"/> 
                <div className="d-flex">
                  <button className='btn btn-outline-danger'>Salir</button>  
                </div>      
            </div> 
        </nav>
      </div>
    </div>
  )
}
