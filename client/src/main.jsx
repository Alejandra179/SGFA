import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.css';
import {QueryClient, QueryClientProvider} from 'react-query';
=======
import App from './App';
//import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
>>>>>>> a30e0c9a1bacdcad4931710f321d82bb707f4391
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from './pages/Auth';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>
  },
  {
    path: "/home",
    element: <MainPage/>,
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      
    </QueryClientProvider>
  </React.StrictMode>
)
