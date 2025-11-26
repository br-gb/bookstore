import React from "react";
import "./Livros.css"; 

function Livros() {
  return (
    <div className="livros-page">

    
      <section className="livros-header">
        <h1>Nosso Catálogo de Livros</h1>
        <p>
          Explore nossa coleção especial com títulos para todos os gostos: 
          romances, suspense, ficção científica, fantasia, clássicos e muito mais.
          Aqui você encontra livros selecionados com carinho para todos os leitores!
        </p>
      </section>

      <section className="galeria">
        <h2>Galeria de Livros</h2>

        <div className="galeria-container">
          <figure>
            <img src="/livro1.png" alt="Livro 1" />
            <figcaption>Uma Incrivel Aventura na Selva</figcaption>
          </figure>

          <figure>
            <img src="/livro2.png" alt="Livro 2" />
            <figcaption>Juntos ao luar</figcaption>
          </figure>

          <figure>
            <img src="/livro3.png" alt="Livro 3" />
            <figcaption>Mistérios da meia-noite</figcaption>
          </figure>

          <figure>
            <img src="/livro4.png" alt="Livro 4" />
            <figcaption>O enigma da meia-noite</figcaption>
          </figure>
        </div>
      </section>

   
      <section className="tabela-livros">
        <h2>Informações dos Livros</h2>

        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Gênero</th>
              <th>Preço</th>
              <th>Disponibilidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uma Incrivel Aventura na Selva</td>
              <td>Aventura</td>
              <td>R$ 39,90</td>
              <td>Disponível</td>
            </tr>

            <tr>
              <td>Juntos ao luar</td>
              <td>Romance</td>
              <td>R$ 42,00</td>
              <td>Poucas unidades</td>
            </tr>

            <tr>
              <td>Mistérios da meia-noite</td>
              <td>Suspense</td>
              <td>R$ 35,50</td>
              <td>Esgotado</td>
            </tr>

            <tr>
              <td>O enigma da meia-noite</td>
              <td>Mistério</td>
              <td>R$ 49,90</td>
              <td>Disponível</td>
            </tr>
          </tbody>
        </table>
      </section>


      <footer className="footer">
        <p>© 2025 — Bookstore Online | Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default Livros;
