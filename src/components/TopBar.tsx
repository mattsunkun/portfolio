// base
import React from 'react';


// mui
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IconButton } from '@mui/material';

import { ePage } from '../pages';
import { Link } from 'react-router-dom';

const TopBar: React.FC<{ pageMode: symbol, setPageMode: React.Dispatch<React.SetStateAction<symbol>> }> = (props) => {

  // const handleChange = (event: React.SyntheticEvent, newValue: symbol) => {
  //   //     props.setPageMode(newValue);
  // };

  return (
    <>
      <Box className="top-bar" sx={{ top: 0, left: 0, width: "100%" }}>
        <AppBar sx={{ height: "9vh" }} position="fixed">
          <Toolbar>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              トップバー
            </Typography> */}

            <Tabs
              // value={props.pageMode}
              // onChange={handleChange}
              sx={{ flexGrow: 1, cursor: "pointer" }}
              aria-label="icon label tabs example"
              textColor="secondary"
              indicatorColor="secondary">
              <Tab icon={<LocalOfferIcon />} component={Link} to={ePage.home} />
              <Tab icon={<AccountCircleIcon />} component={Link} to={ePage.about} />
              <Tab icon={<ColorLensIcon />} component={Link} to={ePage.skills} />
              <Tab icon={<ColorLensIcon />} component={Link} to={ePage.products} />
              <Tab icon={<ColorLensIcon />} component={Link} to={ePage.history} />
            </Tabs>
            {/* <Button color="inherit" variant="outlined" startIcon={<TwitterIcon />} component={Link} to={"asdf"} /> */}
            <IconButton color="inherit" aria-label="Github" component={Link} to={"https://github.com/mattsunkun"} ><GitHubIcon /></IconButton>
            <IconButton color="inherit" aria-label="Twitter" component={Link} to={"https://twitter.com/mattsunkun1221"} ><TwitterIcon /></IconButton>
            <IconButton color="inherit" aria-label="Instagram" component={Link} to={"https://www.instagram.com/mattsunkun/"} ><InstagramIcon /></IconButton>
            <IconButton color="inherit" aria-label="YouTube" component={Link} to={"https://www.youtube.com/channel/UCaamzbGKGG3YovpUmutQVag"} ><YouTubeIcon /></IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;