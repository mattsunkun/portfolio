import { Box, Grid, Typography } from "@mui/material";
import Record from "../components/Record";
import EventsLine from "../components/timeline/EventsLine";
import dirImages from "src/data/Root/Users/mattsunkun/about/info/images";
import { useCallback, useEffect, useState } from "react";
import { keyboardKey } from "@testing-library/user-event";
import konami from "src/functions/konami";


const About = () => {
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

  return (
    <>
      <Box paddingTop={3}
        component="div"
      >
        <Grid container spacing={1}>

          <Grid item xs={12}>

            {/* コナミコマンドをここに設定したい． */}

            <Grid container spacing={1}>

              <Grid item xs={3}>

                <Box

                  component="img"
                  src={dirImages.files.find((file) => {
                    return file.name === "profile"
                  })
                    ?.meta?.img}
                  sx={{
                    width: "30%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block", // 横方向に中央揃えするために必要
                    transform: `rotate(${rotateProfile}deg)`, // 回転の度数をステートに基づいて動的に変更
                    transition: "transform 1.5s",
                  }}
                />
              </Grid>
              <Grid item xs={9}>


                <Box>
                  <Typography>
                    goodspeed
                    Githubのリポジトリも何があるかとシークレットキー，アルバイトでどこまで書いていいか．一旦確認したい．",
                    海外3年経験
                    appheroyuki, 魚の部屋
                    公開してもいいかどうか．jobs(aboutとskills), 単純にskillsに掲載したやつ．

                  </Typography>
                  <Typography>
                    ちょっと，スマホ小さいやつのswitchリスポンしぶは諦めよう．
                    後，スマホ小さいときは上を伸ばそう．



                  </Typography>
                </Box>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12}>
            <EventsLine line="" />
          </Grid>
        </Grid >
      </Box>

    </>
  );
};

export default About;