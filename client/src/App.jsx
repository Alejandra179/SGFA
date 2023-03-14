import React, { createContext, useState } from 'react';
import Auth from "./pages/Auth";

export const TokenContext = React.createContext(null)
function App() {
  const [token, setToken] = useState(null)
  return (
    <TokenContext.Provider value={[token,setToken]}>
      <Auth/>
    </TokenContext.Provider>

   
  )
}

export default App;

  



