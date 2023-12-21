// base
import React from 'react';


// mui
import TwitterIcon from '@mui/icons-material/Twitter';
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

import { home, about, skills, products, history, pnf } from '../pages';

const TopBar: React.FC<{ pageMode: symbol, setPageMode: React.Dispatch<React.SetStateAction<symbol>> }> = (props) => {

  const handleChange = (event: React.SyntheticEvent, newValue: symbol) => {
    props.setPageMode(newValue);
  };

  return (
    <>
      <Box className="top-bar" sx={{ top: 0, left: 0, width: "100%" }}>
        <AppBar sx={{ height: "9vh" }} position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              トップバー
            </Typography>

            <Tabs
              value={props.pageMode}
              onChange={handleChange}
              aria-label="icon label tabs example"
              textColor="secondary"
              indicatorColor="secondary">
              <Tab icon={<LocalOfferIcon />} label="home" value={home} />
              <Tab icon={<AccountCircleIcon />} label="about" value={about} />
              <Tab icon={<ColorLensIcon />} label="skills" value={skills} />
            </Tabs>
            <Button color="inherit" variant="outlined" startIcon={<TwitterIcon />} onClick={() => { props.setPageMode(about) }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;