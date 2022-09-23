import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from "./components/Menu";
import { Contatos } from "./pages/Contatos/Contatos";
import { Home } from "./pages/Home/Home";
import { Sobre } from "./pages/Sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Contatos' element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
