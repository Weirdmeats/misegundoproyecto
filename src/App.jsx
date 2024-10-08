import React from 'react';
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
}

export default App;
