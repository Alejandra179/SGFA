import React from 'react'

export default function FormDinamico() {
  
  return (
    <div className='container'>
        <div className='d-flex justify-content-center'>
                <form >     
                    <div className='row'>
                        <div className='col-4'>
                            <label className="form-label">Nombre</label>
                            <input className='form-control' type="text"/>
                        </div>
                        <div className='col-3'>
                            <label className="form-label">Cantidad</label>
                            <input className='form-control' type="text"/>

                        </div>
                      {/*   {(input)?<div>true</div>:""} */}
                      
                        <div className='col-1'>
                            <button className='btn btn-success' onClick={()=>setInput(true)}>
                                <i className="bi bi-file-earmark-plus-fill"></i>
                            </button>

                        </div>
                    </div>
                    
                </form>
        </div>
    </div>
       


  )
}
