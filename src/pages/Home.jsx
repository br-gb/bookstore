import React from 'react';
// 1. Importe o banner. Mude 'react.svg' para o nome do seu novo arquivo de banner (ex: livraria-banner.jpg)
import bannerImage from '../assets/livraria-banner.jpg'; // <-- MUDANÇA AQUI!

function Home() {
  return (
    <div className="home-page">
      
      {/* 2. Banner/Imagem com cores contrastantes */}
      <section className="banner">
        <img src={bannerImage} alt="Banner ilustrativo de livros e leitura" />
        <div className="banner-text">
          <h2>Bem-vindo à Bookstore Online</h2>
          <p>Sua nova aventura começa aqui.</p>
        </div>
      </section>

      {/* 3. Texto de Introdução */}
      <section className="intro-text">
        <h3>Descubra Mundos Incríveis</h3>
        <p>
          Na Bookstore Online, acreditamos que cada livro é uma porta para um novo universo. 
          Explore nossa vasta coleção de títulos, dos clássicos atemporais aos best-sellers 
          do momento. 
        </p>
        <p>
          Navegue pela nossa seção de <a href="/livros">livros</a> ou entre em 
          <a href="/contato">contato</a> conosco se tiver qualquer dúvida.
        </p>
      </section>

    </div>
  );
}

export default Home;

