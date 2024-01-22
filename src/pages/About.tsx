import { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Record from "../components/Record";
import EventsLine from "../components/timeline/EventsLine";
import dirImages from "src/data/Root/Users/mattsunkun/about/info/images";
import { useCallback, useEffect, useState } from "react";
import { keyboardKey } from "@testing-library/user-event";
import konami from "src/functions/konami";
import { darkModeContext, tBooleanSet } from 'src/App';
import dirInfo from "src/data/Root/Users/mattsunkun/about/info";
import Furigana from "src/components/resume/Furigana";
import SpeechBubble from "src/components/SpeechBubble";


const About = () => {
  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) || {}) as tBooleanSet;
  // キーダウンイベント
  const handleKeyDown = (event: KeyboardEvent) => {

    if (konami.push(event)) {
      setRotateProfile((rotateProfile) => rotateProfile + 360);
    }
  }
  useEffect(() => {
    // イベント追加
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      // イベント消去
      document.removeEventListener("keydown", (e) => handleKeyDown(e));
    };
  }, []);

  // 画像の回転
  const [rotateProfile, setRotateProfile] = useState<number>(0);

  const borderLine = (num: number) => `${num}px solid #${isDarkMode ? "FFF" : "000"}`;

  const speech: string[] = dirInfo.files.map(file => {
    return `${file.name}→${file.contents}`
  });
  return (
    <>
      <Box
        marginTop="100px"
        padding={2}
        component="div"
      // sx={{
      //   border: borderLine(1),
      // }}
      >
        {/* konami is here */}
        <Grid container>
          <Grid item xs={12}>

          </Grid>
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SpeechBubble
            speech={speech.join("\n")}
            squareLength={window.innerHeight - 300}
          />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

          <Box

            component="img"
            src={dirImages.files.find((file) => {
              return file.name === "profile"
            })
              ?.meta?.img}
            sx={{
              width: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block", // 横方向に中央揃えするために必要
              transform: `rotate(${rotateProfile}deg)`, // 回転の度数をステートに基づいて動的に変更
              transition: "transform 1.5s",
            }}
            style={{
              // padding={ 1}
            }}
          />
        </Box>

      </Box >

    </>
  );
};

export default About;