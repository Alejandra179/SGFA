import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      
    </div>
  )
}

export default App
