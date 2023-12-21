// base
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom";
// mui
import Container from '@mui/material/Container';

// css 
import "./App.css";
// pages
import { Home, home } from "./pages/Home";
import { About, about } from './pages/About';
import { Skills, skills } from './pages/Skills';
import { Products, products } from './pages/Products';
import { History, history } from './pages/History';
import { Pnf, pnf } from "./pages/Pnf";

// components
import TopBar from './components/TopBar';

// ページの型列挙





export type tPageMode = typeof home | typeof about | typeof skills | typeof products | typeof history | typeof pnf;

const App: React.FC = () => {
  // ページ情報
  const [pageMode, setPageMode] = useState<tPageMode>(home)

  return (
    <>
      <BrowserRouter>
        <TopBar pageMode={pageMode} setPageMode={setPageMode} />
        <Container className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/products" element={<Products />} />
            <Route path="/history" element={<History />} />
            <Route path="/*" element={<Pnf />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
};

export default App;