import React from 'react';
// Importamos o Link para navegar entre as páginas sem recarregar
import { Link, NavLink } from 'react-router-dom';
// Importe seu logo
import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      
      {/* 1. Logo do Projeto */}
      <Link to="/" className="logo-container">
        <img src={logo} alt="Bookstore Logo" className="logo" />
        <h1>Bookstore Online</h1>
      </Link>

      {/* 1. Menu de Navegação */}
      <nav>
        <ul>
          <li>
            {/* Usamos NavLink para poder estilizar o link da página ativa */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/livros">Livros</NavLink> {/* "página2" */}
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
