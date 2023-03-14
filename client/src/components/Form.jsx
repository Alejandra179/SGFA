import React, {  useContext, useState } from 'react'
import {useMutation} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../App';


export const Form = () => {
  const [ isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()
 
  const [token, setToken] = useContext(TokenContext);
  /* const {token, setToken} = useContext(AuthContext) */
  /* const {data,isLoading,mutate:doRegister} = useMutation(
    async function(user){
      const response = await fetch('http://localhost:4000/auth/register', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      return response.json();
    },{
      onSuccess:(res)=>{
        if(res.message){
          console.log(res)
        }else{
          const { token } = res
         setToken(token)
          console.log(token) 
          navigate('/home')
        }
     }
    },{
      onError:(error)=>console.log(error)
    }
  )

  

  
  const handleSubmit =(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const auth = Object.fromEntries(formData)
    doRegister(auth)
    
  }
  const mutation = useMutation(
    async function(user){
      const response = await fetch('http://localhost:4000/auth/login', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      return response.json();
    },{
      onSuccess:(res)=>{
        if(res.message){
          console.log(res)
        }else{
          const { token } = res
          setToken(token)
          console.log(token)
          console.log()
          navigate('/home')
        }
     }
    },{
      onError:(error)=>console.log(error)
    }
  )

  const onHandleSubmit =(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const auth = Object.fromEntries(formData)
    mutation.mutate(auth)
    
  } */
  
 
  
 /*  if(isLogin){
  return (<div>
    <div className="d-flex justify-content-center">
    <div className="card">
      
      <div className="card-header">
        <div className="text-center">
          <img
            src="/images/logo.jpeg"
            className="rounded"
            alt="logo fundacion"
          />
        </div>
        <div className="container">
        {mutation.data?.message ? <div className="bg-info">{mutation.data?.message}</div> : null}
        </div>
      </div>
      <div className="card-body">
       
        <form onSubmit={onHandleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
             
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-link pl-5" onClick={()=>setIsLogin(false)}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  </div>
  </div>)
  }
  return (<div>
   
    <div className="d-flex justify-content-center">
    <div className="card">
      
      <div className="card-header">
        <div className="text-center">
          <img
            src="/images/logo.jpeg"
            className="rounded"
            alt="logo fundacion"
          />
          
        </div>

        <div className="container">
        {data?.message ? <div className="bg-info">{data.message}</div> : null}
        </div>
      </div>
      <div className="card-body">
       
       
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Apellido y Nombre</label>
            <input
              type="text"
              className="form-control"
              id="apellidoYnombre"
              name="name"
              aria-describedby="emailHelp"
             
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="nameuser"
              name="username"
              aria-describedby="emailHelp"
             
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rol</label>
            <select className="form-select" name="role">
              <option>Selecciona un rol</option>
              <option value="admin">Admin</option>
              <option value="comun">Común</option>
              
            </select>
          </div>
         
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-link pl-5" onClick={()=>setIsLogin(true)}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </div>
  </div>) */
  return (
    <div>cargo</div>
  ) 
}

