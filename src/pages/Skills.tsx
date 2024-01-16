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
    H = window.innerHeight - 350;
  } else {
    W = 320
    H = 3000// window.innerHeight - 400;
  }
  return (
    <>
      <Box

        // paddingTop="10px"
        paddingTop={2.5}
      >
        <Grid container
          justifyContent="center"
          alignContent="center"
        >
          <Grid item>

            <Matters dirSkills={dirSkills}
              W={W}
              H={H}
            />
          </Grid>
        </Grid>

      </Box>

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
        <LinkLine
          link="https://www.flaticon.com/"
          line="Flaticon"
          isUnderLine
          headingLine="Icons by "
        />
      </Box>
    </>
  );
};

export default Skills;
