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

  const speech: string = "こんにちは！私はChatGPTと呼ばれるAIアシスタントで、OpenAIによって開発された言語モデルの一部です。私はGPT-3.5アーキテクチャに基づいており、自然言語処理や理解に関する様々なタスクに対応しています。" +
    "私は質問に答え、文を生成し、様々なトピックについての情報を提供することができます。ただし、私はプログラムを実行したり、個別のユーザー情報にアクセスすることはできません。会話の中でお手伝いできることがあれば、お気軽に質問してください！";
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
            speech={"speech\nfrom\nChatGPT\na\na\na\na"}
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