import { AppBar, Box, Button, IconButton, Link, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import TerminalIcon from '@mui/icons-material/Terminal';
import PersonIcon from '@mui/icons-material/Person';
import HtmlIcon from '@mui/icons-material/Html';
import ComputerIcon from '@mui/icons-material/Computer';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddLinkIcon from '@mui/icons-material/AddLink';

import { ePage } from "../../pages";
import LinkLine from "../LinkLine";
import LinkButton from "../LinkButton";
import LinkActive from "../LinkActive";

const FootBar = () => {
  return (
    <>
      <Box className="foot-bar" sx={{ top: 0, left: 0, width: "100%" }}>
        <AppBar component="footer" position="static" color="inherit">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container spacing={2} marginY={2}

            >

              <Grid
                xs={5}
                marginY={1}
                marginX={1}
              >
                <LinkLine link={ePage.home} line={ePage.home2} isSameTab />
                <LinkLine link={ePage.about} line={ePage.about} isSameTab />
                <LinkLine link={ePage.skills} line={ePage.skills} isSameTab />
                <LinkLine link={ePage.works} line={ePage.works} isSameTab />

                {/* <LinkButton link={ePage.home} line={ePage.home2} icon={<TerminalIcon />} />
                <LinkButton link={ePage.about} line={ePage.about} icon={<PersonIcon />} />
                <LinkButton link={ePage.skills} line={ePage.skills} icon={<HtmlIcon />} />
                <LinkButton link={ePage.works} line={ePage.works} icon={<ComputerIcon />} /> */}
              </Grid>

              <Grid
                xs={5}
                marginY={1}
                marginX={1}
              >
                <LinkButton link="https://github.com/mattsunkun" line="GitHub" icon={<GitHubIcon />} />
                <LinkButton link="https://twitter.com/mattsunkun1221" line="X(Twitter)" icon={<TwitterIcon />} />
                <LinkButton link="https://www.instagram.com/mattsunkun/" line="Instagram" icon={<InstagramIcon />} />
                <LinkButton link="https://www.youtube.com/channel/UCaamzbGKGG3YovpUmutQVag" line="YouTube" icon={<YouTubeIcon />} />
                <LinkButton link="https://qiita.com/mattsunkun" line="Qiita" icon={<AddLinkIcon />} />
                <LinkButton link="https://zenn.dev/mattsunkun" line="Zenn" icon={<AddLinkIcon />} />
              </Grid>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            //           padding={3}
            margin={3}
          >

            <Typography fontSize={12} component='a' href={'https://github.com/mattsunkun/portfolio'} target="_blank" color={"inherit"} sx={{ textDecoration: 'none' }}>© 2023 Masaaki MATSUMOTO</Typography>

          </Box>
        </AppBar >
      </Box>
    </>
  );
};

export default FootBar;