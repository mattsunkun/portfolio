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
        <Grid container spacing={1}
        // sx={{
        //   border: borderLine(1),
        // }}
        >

          {/* profile */}
          <Grid item xs={12}>
            <Grid container spacing={0}>
              {/* (title & date) & (name & birthday & age & sex) */}
              <Grid item xs={10}>
                <Grid container direction="column" spacing={0}

                >

                  {/* 題名 今日 */}
                  <Grid item xs={12}
                  // style={{
                  //   border: borderLine(0.5),
                  // }} 
                  >
                    <Typography variant="caption"
                      padding={1}
                      paddingLeft={2}
                    >
                      About _2023/1/21 現在
                    </Typography>

                  </Grid>
                  <Furigana
                    furigana="_まつもと まさあき"
                    main="_松本 昌亮"
                    metaMain="氏名"
                    borderLine={borderLine(0.5)}
                  />
                  {/* name & birthday & age & sex */}
                  {/* 誕生日 年齢 性別 */}

                  <Grid item xs={12}
                    style={{
                      border: borderLine(1),
                    }}
                  >
                    <Typography variant="caption"
                      padding={1}
                      paddingLeft={2}
                    >
                      _2002年12月21日生 (満 21 歳) 性 男
                    </Typography>


                  </Grid>

                </Grid>
              </Grid>

              {/* my face */}
              <Grid item xs={2}>
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
              </Grid>

            </Grid>

          </Grid>

          {/* introduction */}
          <Grid item xs={12}>
            <Grid container direction="column"
            // sx={{
            //   border: borderLine(0.5),
            // }}
            >
              <Grid item xs={2}
              // sx={{
              //   border: borderLine(0.5),
              // }}
              >
                自己紹介
              </Grid>
              <Grid item xs={10}
                sx={{
                  border: borderLine(1),
                }}
              >
                <Typography variant="h4">
                  ChatGPTによる自己紹介<br />
                  ChatGPTによる自己紹介<br />
                  ChatGPTによる自己紹介<br />
                </Typography>
              </Grid>

            </Grid>

          </Grid>

          {/* qualifications */}
          <Grid item xs={12}>

          </Grid>

          {/* history */}
          <Grid item xs={12}>
            <EventsLine line="" />
          </Grid>
        </Grid >
      </Box >

    </>
  );
};

export default About;