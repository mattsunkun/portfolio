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
import SaveButton from "src/components/svg/SaveButton";

import LineSection from "src/components/LineSection";


const About = () => {
  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) || {}) as tBooleanSet;
  // キーダウンイベント
  const handleKeyDown = (event: KeyboardEvent) => {

    // setSpeech(dirInfo.files.map(file => {
    //   return `${file.name}→${file.contents}`
    // }).reverse().join("\n"))
    if (konami.push(event)) {
      setRotateProfile((rotateProfile) => rotateProfile + 360);
    }
  }
  useEffect(() => {


    setSpeech(dirInfo.files.map(file => {
      return `${file.name}→${file.contents}`
    }).join("\n"))

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

  const [speech, setSpeech] = useState<string>("");
  return (
    <>
      <Box
        // marginTop="0px"
        padding={0}
        component="div"
      // sx={{
      //   border: borderLine(1),
      // }}
      >
        <Box
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
          marginTop={1}
        >
          {/* <LineSection line="Intros" /> */}

          {/* intro */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <SpeechBubble
              speech={speech}
              squareLength={window.innerHeight - 250}
            />
          </Box>

          {/* face */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* konami is here */}
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
        </Box>
        <Box marginTop={10}>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <LineSection line="Events" />
          </Box>
          <EventsLine />
        </Box>

      </Box >

    </>
  );
};

export default About;