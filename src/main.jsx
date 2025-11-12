import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importa o layout principal e as páginas
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Livros from './pages/Livros.jsx';
import Contato from './pages/Contato.jsx';

// Importa os estilos globais
import './index.css';

// Define a estrutura de rotas
const router = createBrowserRouter([
  {
    path: "/", // A rota raiz (/)
    element: <App />, // Carrega o layout principal (App.jsx)
    children: [
      // As rotas filhas são renderizadas dentro do <Outlet> do App.jsx
      {
        path: "/",
        element: <Home />, // Página inicial
      },
      {
        path: "/livros", // "página2"
        element: <Livros />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);

// Renderiza o aplicativo usando o provedor de rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);