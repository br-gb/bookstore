import React from 'react';
import './contato.css';

const Contato = () => {
  
  const nomeEmpresa = "Viagens pelo Mundo";
  const emailContato = "vicggs21@gmail.com";
  const whatsapp = "(86) 99960-1239";
  const telefoneFixo = "(86) 99960-1239";
  const endereco = "Rua das Viagens, 123 - Centro, Cidade Exemplo, CE - 99999-000";
  const horarioAtendimento = "Segunda a Sexta-feira, das 09:00h às 18:00h (Horário de Brasília)";

  
  const redesSociais = [
    { nome: "Instagram", url: "https://instagram.com/viagenspelomundo", icone: "📷" },
    { nome: "Facebook", url: "https://facebook.com/viagenspelomundo", icone: "📘" },
    { nome: "LinkedIn", url: "https://linkedin.com/company/viagenspelomundo", icone: "🔗" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
    
  };

  return (
    <section className="contato-container">
      <h2>Fale Conosco</h2>
      <p className="subtitle">Estamos prontos para planejar sua próxima aventura com **{nomeEmpresa}**!</p>

      <div className="contato-grid">
        
        <div className="contato-info">
          <h3>Informações Essenciais</h3>

          
          <div className="info-item">
            <h4>Nome do Projeto:</h4>
            <p className="nome-empresa">{nomeEmpresa}</p>
          </div>

         
          <div className="info-item">
            <h4>Meios de Contato:</h4>
            <p>E-mail: <a href={`mailto:${emailContato}`}>{emailContato}</a></p>
            <p>WhatsApp: <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">{whatsapp}</a></p>
            <p>Telefone Fixo: {telefoneFixo}</p>
          </div>

         
          <div className="info-item">
            <h4>Endereço de Atendimento:</h4>
            <address>
              {endereco}
            </address>
            <small>*Atendimento presencial com hora marcada.</small>
          </div>

         
          <div className="info-item">
            <h4>Horário de Atendimento:</h4>
            <p>**{horarioAtendimento}**</p>
          </div>
        </div>

       
        <div className="contato-form">
          <h3>Envie sua Mensagem Rápida</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Seu Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Seu E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Sua Mensagem / Dúvida:</label>
              <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>
      </div>

      
      <div className="redes-sociais">
        <h3>Siga-nos nas Redes Sociais</h3>
        <div className="social-links">
          {redesSociais.map((rede) => (
            <a key={rede.nome} href={rede.url} target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">{rede.icone}</span> {rede.nome}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contato;