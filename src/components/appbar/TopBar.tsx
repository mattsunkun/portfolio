// base
import React, { FC } from 'react';
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
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// mine
import { ePage } from '../../pages';
import LinkActive from '../LinkActive';


// 競プロについてもリンクをかく．
const TopBar: FC<{ isDarkMode: boolean, setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> }> = (props) => {
  const location: Location = useLocation();
  const linkStyle = {
    textDecoration: "none",
    color: 'inherit',
  };

  const visitedLinkStyle = {
    textDecoration: "underline",
    color: 'inherit',
  };
  return (
    <>
      <Box className="top-bar" sx={{ top: 0, left: 0, width: "100%" }}>
        <AppBar sx={{ height: "9vh" }} position="fixed">
          <Toolbar>
            <Typography sx={{ flexGrow: 1, cursor: "pointer" }}>
              <Link
                to={ePage.home.toLowerCase()}
                style={(location.pathname === `/${ePage.home}`) ||
                  (location.pathname === `/${ePage.home2.toLowerCase()}`) ||
                  (location.pathname === `/${ePage.home2.toLowerCase()}/`)
                  ? visitedLinkStyle : linkStyle}>
                Matsh
              </Link>
              <LinkActive page={ePage.about} />
              <LinkActive page={ePage.skills} />
              <LinkActive page={ePage.works} />
              <LinkActive page={ePage.experiences} />
              <LinkActive page={ePage.qualifications} />
            </Typography>

            <Typography >


              <IconButton color="inherit" onClick={() => props.setIsDarkMode(!props.isDarkMode)}>
                {
                  props.isDarkMode ? <DarkModeIcon /> : <LightModeIcon />
                }
              </IconButton>

              {/* <IconButton color="inherit" aria-label="Github" component={Link} to={"https://github.com/mattsunkun"} ><GitHubIcon /></IconButton>
              <IconButton color="inherit" aria-label="Twitter" component={Link} to={"https://twitter.com/mattsunkun1221"} ><TwitterIcon /></IconButton>
              <IconButton color="inherit" aria-label="Instagram" component={Link} to={"https://www.instagram.com/mattsunkun/"} ><InstagramIcon /></IconButton>
              <IconButton color="inherit" aria-label="YouTube" component={Link} to={"https://www.youtube.com/channel/UCaamzbGKGG3YovpUmutQVag"} ><YouTubeIcon /></IconButton> */}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;