import { Box, Grid, Typography } from "@mui/material";
import Record from "../components/Record";
import EventsLine from "../components/timeline/EventsLine";


const About = () => {
  return (
    <>
      <Box paddingTop={3}>

        <Grid container spacing={1}>

          <Grid item xs={12}>

            {/* コナミコマンドをここに設定したい． */}

            <Grid container spacing={0}>

              <Grid item xs={6}>

                <Box

                  component="img"
                  src={`${process.env.PUBLIC_URL}/images/hato.png`}
                  sx={{
                    width: "30%",
                  }}
                />
              </Grid>
              <Grid item xs={6}>


                <Box>
                  <Typography>
                    NY研修、数学のなにか、タイのやつ
                    日光街道、小田原
                    初動画配信
                    "他にも，アルバイト経験を書きたい．0-1ゼミについても書きたい．jackについても書きたい．nttのインターンも，Ad構築，ウィンドウズサーバーも．Githubのリポジトリも何があるかとシークレットキー，アルバイトでどこまで書いていいか．一旦確認したい．",
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