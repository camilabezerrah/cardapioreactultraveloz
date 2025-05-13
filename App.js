import React, { Suspense, lazy } from 'react';
import MenuList from './components/MenuList'; // Componente principal do cardápio
import './App.css'; // Estilos

// Lazy load do componente ExtraInfo (code splitting)
const ExtraInfo = lazy(() => import('./components/ExtraInfo'));

function App() {
  return (
    <div className="App">
      {/* Renderiza a lista de itens do cardápio */}
      <MenuList />

      {/* Renderiza informações adicionais sob demanda */}
      <h2>Informações Adicionais</h2>
      <Suspense fallback={<div>Carregando informações extras...</div>}>
        <ExtraInfo />
      </Suspense>
    </div>
  );
}

export default App;