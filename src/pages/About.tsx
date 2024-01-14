import { Box, Grid, Typography } from "@mui/material";
import Record from "../components/Record";
import EventsLine from "../components/timeline/EventsLine";


const About = () => {
  return (
    <>
      <h1>簡単な自己紹介etc，好きなものetc，</h1>
      <Grid container spacing={1}>

        <Grid item xs={6}>
          <Box display="flex" alignItems="center">
            {/* コナミコマンドをここに設定したい． */}
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/images/hato.png`}
              sx={{
                width: "30%",
              }}
            />
            <Box>
              <Grid container >
                <Record ke="名前" value="松本昌亮(まさあき)" />
                <Record ke="活動名" value="mattsunkun" />
                <Record ke="誕生日" value="2002年12月21日" />
                <Record ke="所属" value="名古屋大学情報学部コンピュータ科学科知能システム系" />
                <Record ke="Atcoder" value="茶色" />
                <Record ke="好きな食べ物" value="たこやき" />
                <Record ke="好きなアーティスト" value="ずとまよ" />
                <Record ke="最近のブーム" value="ジム" />
                <Record ke="好きなゲーム0" value="風来のシレン" />
                <Record ke="好きなゲーム1" value="ピクミン" />
                <Record ke="好きなゲーム2" value="スマブラ" />
                <Record ke="ひとこと" value="お友達とお喋りするのが大好きです！！" />
                <Typography>
                  NY研修、数学のなにか、タイのやつ
                  日光街道、小田原
                  初動画配信
                  "他にも，アルバイト経験を書きたい．0-1ゼミについても書きたい．jackについても書きたい．nttのインターンも，Ad構築，ウィンドウズサーバーも．Githubのリポジトリも何があるかとシークレットキー，アルバイトでどこまで書いていいか．一旦確認したい．",
                  {/* <Grid xs={3} marginY={1} marginX={1} paddingLeft={3}>
              <Box>
                <LinkLine link="https://picadome.fcps.net/" line="Elementary Sch." />
                <LinkLine link="https://www.ckjs.org/Home.php" line="Cram Sch." />
                <LinkLine link="https://jessieclark.fcps.net/" line="Middle Sch." />
                <LinkLine link="https://www.edtokai.jp/yokosuka-j/" line="Junior High Sch." />
                <LinkLine link="https://highschl.educa.nagoya-u.ac.jp/" line="High Sch." />
                <LinkLine link="https://www.nagoya-u.ac.jp/" line="University" />
              </Box>

            </Grid> */}
                </Typography>
              </Grid>
              {/* GPTに文章を生成させたい． */}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <EventsLine line="" />
          {/* <Box component="img" src={`${process.env.PUBLIC_URL}/images/hato.png`} /> */}
        </Grid>
      </Grid >
    </>
  );
};

export default About;