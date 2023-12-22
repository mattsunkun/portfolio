// base
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// icon
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// mine
import { ePage } from '../pages';


// 競プロについてもリンクをかく．
const TopBar: FC = () => {
  return (
    <>
      <Box className="top-bar" sx={{ top: 0, left: 0, width: "100%" }}>
        <AppBar sx={{ height: "9vh" }} position="fixed">
          <Toolbar>
            <Typography sx={{ flexGrow: 1, cursor: "pointer" }}>
              <Button color="inherit" component={Link} to={ePage.home}>Home</Button>
              <Button color="inherit" component={Link} to={ePage.about}>{ePage.about}</Button>
              <Button color="inherit" component={Link} to={ePage.skills}>{ePage.skills}</Button>
              <Button color="inherit" component={Link} to={ePage.products}>{ePage.products}</Button>
              <Button color="inherit" component={Link} to={ePage.history}>{ePage.history}</Button>
            </Typography>

            <Typography >
              <IconButton color="inherit" aria-label="Github" component={Link} to={"https://github.com/mattsunkun"} ><GitHubIcon /></IconButton>
              <IconButton color="inherit" aria-label="Twitter" component={Link} to={"https://twitter.com/mattsunkun1221"} ><TwitterIcon /></IconButton>
              <IconButton color="inherit" aria-label="Instagram" component={Link} to={"https://www.instagram.com/mattsunkun/"} ><InstagramIcon /></IconButton>
              <IconButton color="inherit" aria-label="YouTube" component={Link} to={"https://www.youtube.com/channel/UCaamzbGKGG3YovpUmutQVag"} ><YouTubeIcon /></IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;