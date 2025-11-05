import React from "react";
import "./App"; // opcional, se quiser estilizar

function Header() {
  return (
    <header className="header">
      <h1>Meu Projeto React</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
