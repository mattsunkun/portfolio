// base
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
// mui
import Container from '@mui/material/Container';

// css 
import "./App.css";
// pages
import Home from "./pages/Home";
import About from './pages/About';
import Skills from './pages/Skills';
// import Products from './pages/Products';
import History from './pages/History';
import Pnf from "./pages/Pnf";

// components
import TopBar from './components/appbar/TopBar';
import FootBar from './components/appbar/FootBar';
import Works from './pages/Works';
import Qualifications from './pages/Qualifications';
import { ePage } from './pages';
import Experiences from './pages/Experiences';

// keybase,qiita, zenn
// ページの型列挙

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Container className="main-content" sx={{ marginTop: "9vh", marginBottom: "9vh" }}>
          <Routes>
            <Route path={ePage.home.toLowerCase()} element={<Home />} />
            <Route path={ePage.home2.toLowerCase()} element={<Home />} />
            <Route path={ePage.about.toLowerCase()} element={<About />} />
            <Route path={ePage.skills.toLowerCase()} element={<Skills />} />
            <Route path={ePage.works.toLowerCase()} element={<Works />} />
            <Route path={ePage.experiences.toLowerCase()} element={<Experiences />} />
            <Route path={ePage.qualifications.toLowerCase()} element={<Qualifications />} />
            <Route path="/*" element={<Pnf />} />
          </Routes>
        </Container>
        <FootBar />
      </BrowserRouter>
    </>
  )
};

export default App;