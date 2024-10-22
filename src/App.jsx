import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/Pages/Inicio/Inicio.jsx'
import Productos from './components/Pages/Productos/Productos.jsx';
import Contactos from './components/Pages/Contactos/Contactos.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
  

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
