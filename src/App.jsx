import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
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

      <main>
        <section id="home">
          <h2>Bem-vindo ao site!</h2>
          <p>Essa é a seção inicial.</p>
        </section>

        <section id="sobre">
          <h2>Sobre</h2>
          <p>Informações sobre o projeto.</p>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Formas de entrar em contato.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
