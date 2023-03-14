import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css';
import {QueryClient, QueryClientProvider} from 'react-query';
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
