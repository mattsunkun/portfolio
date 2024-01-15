// base
import React, { FC, useContext } from 'react';
import { Link, Location } from 'react-router-dom';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink, useLocation } from 'react-router-dom';

// icon
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// mine
import { ePage } from '../../pages';
import LinkActive from '../LinkActive';
import { darkModeContext, tBooleanSet } from 'src/App';

const TopBar = () => {
  const location: Location = useLocation();
  const linkStyle = {
    textDecoration: "none",
    color: 'inherit',
  };

  const visitedLinkStyle = {
    textDecoration: "underline",
    color: 'inherit',
  };

  const { val: isDarkMode, setVal: setIsDarkMode } = (useContext(darkModeContext) || {}) as tBooleanSet;
  return (
    <>
      <Box className="top-bar" sx={{ top: 0, left: 0, width: "100%" }}>
        <AppBar sx={{ height: "65px" }} position="fixed" color="inherit">
          <Toolbar>
            {/* Link */}
            <Typography sx={{ flexGrow: 1, cursor: "pointer" }}>
              <Button
                component={Link}
                to={ePage.home.toLowerCase()}
                style={(location.pathname === `/${ePage.home}`) ||
                  (location.pathname === `/${ePage.home2.toLowerCase()}`) ||
                  (location.pathname === `/${ePage.home2.toLowerCase()}/`)
                  ? visitedLinkStyle : linkStyle}>
                {ePage.home2.toUpperCase()}
              </Button>
              <LinkActive page={ePage.about} />
              <LinkActive page={ePage.skills} />
              <LinkActive page={ePage.works} />
            </Typography>

            {/* Theme */}
            <Typography >
              <IconButton color="inherit" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ?
                  <DarkModeIcon /> :
                  <LightModeIcon />
                }
              </IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;