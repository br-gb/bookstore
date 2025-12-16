import React from 'react';

const DestinoCard = ({ destino }) => {
  return (
    <div className="destino-card">
      <img src={destino.imagemUrl} alt={`${destino.nome}`} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{destino.nome}</h3>
        <p className="card-pais"> {destino.pais}</p>
        <p className="card-descricao">{destino.descricao}</p>
        <div className="card-footer">
          <span className="card-preco">A partir de R${destino.preco.toLocaleString('pt-BR')}</span>
          <button className="card-cta">Ver Pacotes</button>
        </div>
      </div>
    </div>
  );
};

export default DestinoCard;