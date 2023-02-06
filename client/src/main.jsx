import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
//import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <App />
     <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
