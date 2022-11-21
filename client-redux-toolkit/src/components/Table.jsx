import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getComedoresList } from "../features/comedor/comedorAPI";

export default function Table() {
  const { token, isLoading } = useSelector((state) => state.auth);
  const { comedores } = useSelector((state) => state.comedores);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      token !== "" ? await dispatch(getComedoresList(token)) : <></>;

      // ...
    }
    fetchData();
  }, [dispatch, token]);

  if (isLoading) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="row col-8">
            <table className="table table-secondary table-hover">
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
              
                {comedores.map((element) => {
                return(
                  <tr key={element._id}>
                    <th>{element._id}</th>
                    <td>{element.name}</td>
                    <td>{element.address.street}</td>
                    <td>{element.responsable}</td>
                    <td>
                      <button className="btn btn-success mr-3">
                        <Link><i className="bi bi-pencil-square"></i></Link>
                        
                      </button>
                      <button className="btn btn-outline btn-danger pl-1">
                       <Link > <i className="bi bi-trash3"></i></Link>
                      </button>
                    </td>
                  </tr>

                    )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
