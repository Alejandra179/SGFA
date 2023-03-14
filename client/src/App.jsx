<<<<<<< HEAD
import React, { createContext, useState } from 'react';
import Auth from "./pages/Auth";
=======
import { Auth } from "./pages/Auth";
>>>>>>> a30e0c9a1bacdcad4931710f321d82bb707f4391

export const TokenContext = React.createContext(null)
function App() {
  const [token, setToken] = useState(null)
  return (
<<<<<<< HEAD
    <TokenContext.Provider value={[token,setToken]}>
      <Auth/>
    </TokenContext.Provider>

   
  )
=======
   <Auth/>
  );
>>>>>>> a30e0c9a1bacdcad4931710f321d82bb707f4391
}

export default App;

  



