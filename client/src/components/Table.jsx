import React from 'react'
import { useState } from 'react'
import { getComedores } from '../services/comedores';
export default function Table() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
          const res = await getComedores()
          setData(res);
        }
        fetchData();
      
      }, []);
      console.log(data)
  return (
    <div>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                    <div className='row col-7'>
                        
                        <table class="table table-secondary table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Nombre del comedor</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Responsable</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Arcoiris</td>
                                    <td>La Floresta</td>
                                    <td>Gerardo Gonzalez</td>
                                    <td>
                                        <button className='btn btn-success'>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className='btn btn-outline btn-danger p-l-1'>
                                            <i class="bi bi-trash3"></i>

                                        </button>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
  )
}
