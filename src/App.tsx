// base
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
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
// import Qualifications from './pages/Qualifications';
import { ePage } from './pages';
// import Experiences from './pages/Experiences';

import "./fonts/font.css";

// keybase,qiita, zenn
// ページの型列挙
export type tBooleanSet = {
  val: boolean,
  setVal: React.Dispatch<React.SetStateAction<boolean>>,
}
// { isDarkMode: boolean, setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> }

export const darkModeContext = createContext<tBooleanSet | undefined>(undefined);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const darkMode = {
    val: isDarkMode,
    setVal: setIsDarkMode,
  }
  const theme = createTheme({
    palette: {
      mode: (isDarkMode ? "dark" : "light"),
      secondary: {
        main: "#FFFFFF",
        light: "#FFFFFF",
        dark: "#FFFFFF",
      }
    },
    typography: {
      // fontFamily: [
      //   'Roboto',
      //   '"Noto Sans JP"',
      //   '"Helvetica"',
      //   'Arial',
      //   'sans-serif',
      // ].join(','),
      //       fontFamily: "'M PLUS 1 Code', monospace"
      // fontFamily: "HackGen* NF",
      fontFamily: "'M PLUS 1 Code', monospace"

    },
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 768,
    //     lg: 1025,
    //     xl: 1536,
    //   },
    // },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <darkModeContext.Provider value={darkMode}>

            <TopBar />
            <Container className="main-content" sx={{ marginTop: "9vh", marginBottom: "9vh" }}>
              <Routes>
                <Route path={ePage.home.toLowerCase()} element={<Home />} />
                <Route path={ePage.home2.toLowerCase()} element={<Home />} />
                <Route path={ePage.about.toLowerCase()} element={<About />} />
                <Route path={ePage.skills.toLowerCase()} element={<Skills />} />
                <Route path={ePage.works.toLowerCase()} element={<Works />} />
                {/* <Route path={ePage.experiences.toLowerCase()} element={<Experiences />} />
              <Route path={ePage.qualifications.toLowerCase()} element={<Qualifications />} /> */}
                <Route path="/*" element={<Pnf />} />
              </Routes>
            </Container>
            <FootBar />
          </darkModeContext.Provider>

        </BrowserRouter>
      </ThemeProvider>

    </>
  )
};

export default App;