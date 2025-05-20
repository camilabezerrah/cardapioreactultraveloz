import React, { Suspense, lazy } from 'react';
import './App.css'; // Estilos

// Lazy load dos componentes
const MenuList = lazy(() => import('./components/MenuList')); // Menu do cardápio
const ExtraInfo = lazy(() => import('./components/ExtraInfo')); // Informações extras

function App() {
  return (
    <div className="App">
      {/* Renderiza o menu do cardápio sob demanda */}
      <Suspense fallback={<div>Carregando cardápio...</div>}>
        <MenuList />
      </Suspense>

      {/* Renderiza informações adicionais sob demanda */}
      <h2>Informações Adicionais</h2>
      <Suspense fallback={<div>Carregando informações extras...</div>}>
        <ExtraInfo />
      </Suspense>
    </div>
  );
}

export default App;