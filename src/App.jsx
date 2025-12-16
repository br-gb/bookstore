import React from 'react';
import './App.css'; 


import rio from "../src/assets/img/image.png"
import paris from "../src/assets/img/paris.jpg"
import tokyo from "../src/assets/img/toky.avif"


import bali from "../src/assets/img/bali.jpg";        
import machu from "../src/assets/img/machu_pichu.webp"; 
import nova from "../src/assets/img/nova.jpg";   


import Destinos from "./pages/Destinos.jsx";
import Contato from "./pages/Contato.jsx";


const LISTA_DESTINOS_COMPLETA = [
   
     {
        id: 1,
        nome: "Bali",
        pais: "Indonésia",
        descricao: "Ilha paradisíaca conhecida por seus templos vibrantes, praias de areia vulcânica e arrozais em terraços.",
        preco: "5.800",
        imagemUrl: bali,
    },
    {
    
        id: 2,
        nome: "Machu Picchu",
        pais: "Peru",
        descricao: "Antiga cidade Inca, um Patrimônio Mundial, aninhada no alto da Cordilheira dos Andes. Uma maravilha histórica!",
        preco: "3.200",
        imagemUrl: machu, 
    },
    {
        id: 3,
        nome: "Nova York",
        pais: "EUA",
        descricao: "A Big Apple oferece de tudo: museus, teatro, parques icônicos e uma vida noturna agitada.",
        preco: "4.900",
        imagemUrl: nova, 
    },
];


const MainContent = () => {
 return (
<main className="main-content" id="home">
<section className="hero">
 <h1>Planeje suas Viagens pelo Mundo!</h1>
<p>Descubra destinos incríveis, dicas de viagem e roteiros personalizados.</p>

</section>

<section className="destaques">
 <h2> Destaques do Mes</h2>
 <div className="card-container">
<div className="card">
 <h3>Paris, França</h3>
 <img src= {paris} alt="Paris" />
 <p>A cidade luz e do romance.</p>
 </div>
 <div className="card">
 <h3>Tóquio, Japão</h3>
<img src= {tokyo} alt="Tokyo" />
 <p>O encontro perfeito entre tradição e tecnologia.</p>
</div>
<div className="card">
 <h3>Rio de Janeiro, Brasil</h3>
<img src={rio} alt="rio de janeiro" />
<p>Belezas naturais e alegria contagiante.</p>
</div>
</div>
</section>
 </main>
 );
};


const App = () => {
 return (
<div className="app-container">
<header className="header">
<nav className="navbar">
<div className="logo"> Viagens pelo Mundo</div>
<ul className="nav-links">
 <li><a href="#home">Inicio</a></li>
 <li><a href="#destinos-secao">Passagens</a></li>
 <li><a href="#contato-secao">Contato</a></li>
</ul>
</nav>
</header>

<MainContent />

<section id="destinos-secao" className="secao-padrao">
 <Destinos destinosData={LISTA_DESTINOS_COMPLETA} />
</section>

<section id="contato-secao" className="secao-padrao">
 <Contato />
</section>

<footer className="footer">
<p>© 2025 Viagens pelo Mundo. Todos os direitos reservados.</p>
 </footer>
 </div>
 );
};

export default App;