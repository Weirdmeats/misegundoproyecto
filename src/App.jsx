import React from 'react';
<<<<<<< HEAD
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList.jsx';

function App() {
  return (
    <>
        <BrowserRouter>
                  <Header />
                  <ItemList/>
                  
                    <Routes>
                      <Route path="/" element={<div>Home Page</div>} />
                      <Route path="/about" element={<div>About Page</div>} />
                    </Routes>
                  <Footer />
        </BrowserRouter>
    </>
  )
=======
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
>>>>>>> 65382e6 (V 3 Segundo Proyecto)
}

export default App;
