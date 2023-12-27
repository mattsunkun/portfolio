import { AppBar, Box, Button, IconButton, Link, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddLinkIcon from '@mui/icons-material/AddLink';

import { ePage } from "../pages";
import LinkLine from "./LinkLine";
import LinkButton from "./LinkButton";

const FootBar = () => {
  return (
    <>

      <AppBar component="footer" position="static" color="inherit">
        <Box>
          <Grid container spacing={2} marginY={2}>
            <Grid xs={3} textAlign='center' paddingTop={1} sx={{ display: { xs: "none", md: "block" } }}>
              <Typography fontSize={12} component='a' href={'https://github.com/mattsunkun/portfolio'} target="_blank" color={"inherit"} sx={{ textDecoration: 'none' }}>© 2023 Masaaki MATSUMOTO</Typography>
            </Grid>
            <Grid xs={3} marginY={1}>
              <Box>
                <LinkLine link={ePage.home} line="Home" isSameTab />
                <LinkLine link={ePage.about} line="About" isSameTab />
                <LinkLine link={ePage.skills} line="Skills" isSameTab />
                <LinkLine link={ePage.products} line="Products" isSameTab />
                <LinkLine link={ePage.history} line="History" isSameTab />
              </Box>
            </Grid>
            <Grid xs={3} marginY={1}>
              <Box>
                <LinkLine link="https://picadome.fcps.net/" line="Elementary Sch." />
                <LinkLine link="https://www.ckjs.org/Home.php" line="Cram Sch." />
                <LinkLine link="https://jessieclark.fcps.net/" line="Middle Sch." />
                <LinkLine link="https://www.edtokai.jp/yokosuka-j/" line="Junior High Sch." />
                <LinkLine link="https://highschl.educa.nagoya-u.ac.jp/" line="High Sch." />
                <LinkLine link="https://www.nagoya-u.ac.jp/" line="University" />
              </Box>
            </Grid>
            <Grid xs={3} marginY={1}>
              <LinkButton link="https://github.com/mattsunkun" line="GitHub" icon={<GitHubIcon />} />
              <LinkButton link="https://twitter.com/mattsunkun1221" line="X(Twitter)" icon={<TwitterIcon />} />
              <LinkButton link="https://www.instagram.com/mattsunkun/" line="Instagram" icon={<InstagramIcon />} />
              <LinkButton link="https://www.youtube.com/channel/UCaamzbGKGG3YovpUmutQVag" line="YouTube" icon={<YouTubeIcon />} />
              <LinkButton link="https://qiita.com/mattsunkun" line="Qiita" icon={<AddLinkIcon />} />
              <LinkButton link="https://zenn.dev/mattsunkun" line="Zenn" icon={<AddLinkIcon />} />
            </Grid>
          </Grid>
        </Box>
      </AppBar >
    </>
  );
};

export default FootBar;