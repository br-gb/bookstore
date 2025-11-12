import React from 'react';

function Contato() {
  return (
    <div className="contato-page">
      
      <h1>Fale com a Bookstore Online</h1>
      <p>A nossa equipa está aqui para ajudar com pedidos, dúvidas sobre entregas, sugestões de livros ou qualquer outra questão que possa ter. Escolha o canal que mais lhe convém para entrar em contacto connosco.</p>

      {/* --- 1. Formulário de Contato (Essencial) --- */}
      <section className="contact-section form-container">
        <h2>Envie-nos uma Mensagem</h2>
        <p>Preencha os campos abaixo para que possamos direcionar a sua dúvida ao setor correto:</p>
        
        <form className="contact-form">
          
          <div className="form-group">
            <label htmlFor="name">Seu Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Seu E-mail (Ativo e Monitorado):</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Assunto:</label>
            <select id="subject" name="subject" required>
              <option value="">Selecione o Assunto</option>
              <option value="pedido">Dúvida sobre um Pedido / Rastreio</option>
              <option value="devolucao">Trocas e Devoluções</option>
              <option value="sugestao">Sugestão de Livro / Parceria</option>
              <option value="outros">Outros Assuntos</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Sua Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit">Enviar Mensagem</button>
        </form>
        
      </section>

      {/* --- 2. Meios de Contato Diretos e Horário de Atendimento --- */}
      <section className="contact-section direct-info">
        <h2>Canais Diretos e Horários</h2>
        
        <div className="contact-details">
          
          {/* Email */}
          <div className="detail-item">
            <h4>📧 E-mail:</h4>
            <p>O nosso e-mail de suporte está sempre ativo:</p>
            <p className="highlight"><a href="mailto:contato@livrariaonline.com">contato@livrariaonline.com</a></p>
          </div>
          
          {/* Telefone / WhatsApp */}
          <div className="detail-item">
            <h4>📱 Telefone / WhatsApp:</h4>
            <p>Para contato rápido e urgente (apenas horário comercial):</p>
            <p className="highlight">(11) 98765-4321 (WhatsApp)</p>
          </div>

          {/* Horário de Atendimento */}
          <div className="detail-item">
            <h4>⏰ Horário de Atendimento:</h4>
            <p>A nossa equipa responde às mensagens e atende ligações:</p>
            <p className="highlight">Segunda a Sexta, das 9h00 às 18h00</p>
          </div>

        </div>
      </section>

      {/* --- 3. Endereço Físico e Redes Sociais --- */}
      <section className="contact-section location-social">
        <h2>Onde Estamos e Acompanhamento</h2>
        
        {/* Endereço Físico */}
        <div className="detail-item">
            <h4>🗺️ Endereço Físico:</h4>
            <p>Nosso centro de distribuição e escritório central:</p>
            <p className="highlight">Rua da Biblioteca, N° 404 - Bairro Literário</p>
            <p className="highlight">São Paulo, SP - CEP: 01000-000</p>
        </div>

        {/* Redes Sociais */}
        <div className="detail-item">
            <h4>🌐 Siga-nos (Links para Redes Sociais):</h4>
            <p>Acompanhe as novidades, lançamentos e promoções diárias:</p>
            <div className="social-links">
                <a href="https://instagram.com/bookstoreonline" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                {' | '}
                <a href="https://facebook.com/bookstoreonline" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                {' | '}
                <a href="https://linkedin.com/company/bookstoreonline" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </div>
      </section>
      
    </div>
  );
}

export default Contato;