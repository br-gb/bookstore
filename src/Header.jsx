import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      

      <Link to="/" className="logo-container">
        <img src={logo} alt="Bookstore Logo" className="logo" />
        <h1>Bookstore Online</h1>
      </Link>

   
      <nav>
        <ul>
          <li>
   
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/livros">Livros</NavLink>
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
