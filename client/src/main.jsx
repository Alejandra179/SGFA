import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Main from './pages/Main'
import FormDinamico from './components/FormDinamico'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App />}/>
      <Route path="home" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="main" element={<Main/>}/>
      <Route path="din" element={<FormDinamico/>}/>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>   
  </BrowserRouter>
)
