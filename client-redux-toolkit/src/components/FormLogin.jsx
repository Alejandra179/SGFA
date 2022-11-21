import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../features/auth/authAPI";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formUser, setFormUser] = useState({ userName: "", password: "" });

  const handleChange = (e) =>
    setFormUser({ ...formUser, [e.target.name]: e.target.value });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(formUser));
    navigate("/home");
  };

  return (
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
            {formUser.userName === "" || formUser.password === "" ? (
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                Usuario o Contraseña incorrecta
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                id="nameUser"
                name="userName"
                aria-describedby="emailHelp"
                value={formUser.userName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formUser.password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
