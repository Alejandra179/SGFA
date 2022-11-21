import React from 'react';
import './App.css';
import { useSelector } from "react-redux"
import Login from './pages/Login';
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Home from './pages/Home';
function App() {

  const auth = useSelector(state=>state.auth)
  console.log(auth)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={ <Login/>} path="/"/>
        <Route element={<Home/>} path="/home"/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
