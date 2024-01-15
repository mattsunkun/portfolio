import React, { useEffect, useRef, useState, useContext } from "react";
import Matter, { MouseConstraint } from "matter-js";
import { Box, Grid, Typography, Link } from "@mui/material";
import dirLanguages from "src/data/Root/Users/mattsunkun/skills/languages";
import { directory, file } from "src/data/Root";
import dirFrameworks from "src/data/Root/Users/mattsunkun/skills/frameworks";
import dirLibraries from "src/data/Root/Users/mattsunkun/skills/libraries";
import dirSoftware from "src/data/Root/Users/mattsunkun/skills/software";
import { darkModeContext, tBooleanSet } from 'src/App';
import Matters from "src/components/Matters";
import dirSkills from "src/data/Root/Users/mattsunkun/skills";
import LinkLine from "src/components/LinkLine";

const Skills = () => {
  let W; let H;
  if (window.innerWidth - 200 > 0) {

    W = Math.max(window.innerWidth - 200, 320);
    H = window.innerHeight - 400;
  } else {
    W = 320
    H = 3000// window.innerHeight - 400;
  }
  return (
    <>
      <Typography>
        <a target="_blank" href="https://icons8.com/icon/WbRVMGxHh74X/%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB">コンソール</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
        // needless
        Image by <a href="https://pixabay.com/users/patbec-27165555/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7172337">patbec</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7172337">Pixabay</a>
        <a href="https://www.flaticon.com/free-icons/google-apps-script" title="google apps script icons">Google apps script icons created by Freepik - Flaticon</a>
        techicons

        libraries:
        - pythons
        - matter.js
        - three.js
        - .js系s
        - mui
        software:
        - git
        - shotcut
        - docker
        hardware:
        - raspberry
        - cisco
        platform:
        - aws
        - Render
        - vercel
        - detaspace


        ちょっと，スマホ小さいやつのswitchリスポンしぶは諦めよう．
        後，スマホ小さいときは上を伸ばそう．

      </Typography>
      <Grid container
        justifyContent="center"
        alignContent="center"
      >

        <Matters dirSkills={dirSkills}
          W={W}
          H={H}
        />
      </Grid>

      <Box
        marginTop={3}
        textAlign="center"
      >
        <LinkLine
          link="https://icons8.jp/"
          line="Icons8"
          isUnderLine
          headingLine="Icons by "
        />
        <LinkLine
          link="https://techicons.dev/"
          line="TechIcons"
          isUnderLine
          headingLine="Icons by "
        />
        <LinkLine
          link="https://icon-icons.com/"
          line="Icon-Icons"
          isUnderLine
          headingLine="Icons by "
        />
      </Box>
    </>
  );
};

export default Skills;
