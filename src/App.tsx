// base
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom";
// mui
import Container from '@mui/material/Container';

// css 
import "./App.css";
// pages
import Home from "./pages/Home";
import About from './pages/About';
import Skills from './pages/Skills';
import Products from './pages/Products';
import History from './pages/History';
import Pnf from "./pages/Pnf";

// components
import TopBar from './components/TopBar';

// keybase,qiita, zenn
// ページの型列挙

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
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