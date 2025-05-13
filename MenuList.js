import React from 'react';
import MenuItem from './MenuItem';  // Importa o MenuItem
import menuData from '../data';  // Importa os dados do cardápio

function MenuList() {
  return (
    <div className="menu-list">
      {menuData.map((item) => (
        <MenuItem
          key={item.nome}  // Chave única para cada item
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
}

export default MenuList;