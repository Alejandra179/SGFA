import React,{useState} from 'react'

export default function TableRegistros() {
   
  return (
    <div>
         <div className='container'>
          <div className='ml-4 pl-2 d-flex justify-content-start'>
          <button className='btn btn-success'>
                <i className="bi bi-file-earmark-plus-fill"></i>
            </button>

          </div>
            <div className='d-flex justify-content-center'>
                    <div className='row col-8'>
                    <table className="table table-secondary table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Nombre del comedor</th>
                                    <th scope="col">Lista</th>
                                    <th scope="col">Última actualización</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fecha de entrega</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Arcoiris</td>
                                    <td>
                                        <button className='btn btn-outline btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" title='Ver lista'>
                                           <i class="bi bi-eye-fill"></i>
                                        </button>
                                    </td>
                                    <td>12/08/2022</td>
                                    <td>
                                        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" title='Entregado'>
                                            <i class="bi bi-check2-circle"></i>
                                        </button>
                                        <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#exampleModal" title='Entregado con observaciones'>
                                            <i class="bi bi-exclamation-circle"></i>
                                        </button>
                                        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" title='Falta entregar'>
                                            <i class="bi bi-x-circle"></i>
                                        </button>
                                    </td>
                                    <td>16/08/2022 </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
  )
}
