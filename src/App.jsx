import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import './App.css'; // Importa os estilos principais

function App() {
  return (
    <div className="App">
      {/* O Header fica fixo no topo */}
      <Header />

      {/* O <Outlet> é o espaço onde as páginas (Home, Contato, etc.) 
          serão renderizadas pelo React Router */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* Você poderia adicionar um <Footer /> aqui também */}
    </div>
  );
}

export default App;