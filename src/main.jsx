import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import Home from './pages/Home.jsx';
import Livros from './pages/Livros.jsx';
import Contato from './pages/Contato.jsx';


import './index.css';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
  
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/livros", 
        element: <Livros />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);