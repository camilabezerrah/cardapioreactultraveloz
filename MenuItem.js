import React from 'react';

function MenuItem({ nome, descricao, preco, imgSrc }) {
  return (
    <div className="menu-item">
      <img
        src={`imagens/${imgSrc}`}  // Caminho da imagem do prato
        alt={nome}
        loading="lazy"  // Ativa o lazy loading
        width="200"
        height="150"
        style={{
          background: 'url(/images/placeholder-image.jpg) center center no-repeat',  // Placeholder
          backgroundSize: 'cover',
        }}
      />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p className="preco">R$ {preco}</p>
    </div>
  );
}

export default MenuItem;