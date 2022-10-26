import { Provider } from "react-redux";
import { store } from "./store";
import './App.css'

function App() {
  
  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      
    </Provider>
      
  )
}

export default App
