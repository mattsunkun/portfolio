import { Box, Grid, Typography } from "@mui/material";
import Record from "../components/Record";
import EventsLine from "../components/timeline/EventsLine";
import dirImages from "src/data/Root/Users/mattsunkun/about/info/images";
import { useCallback, useEffect, useState } from "react";


const About = () => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const keyCodes = {
      a: "a",
      b: "b",
      left: "ArrowLeft",
      up: "ArrowUp",
      right: "ArrowRight",
      down: "ArrowDown",
    }
    let isExec = false;
    switch (event.key) {
      case keyCodes.a:
        isExec = konami.push(keys.a);
        break;
      case keyCodes.b:
        isExec = konami.push(keys.b);
        break;
      case keyCodes.left:
        isExec = konami.push(keys.left);
        break;
      case keyCodes.up:
        isExec = konami.push(keys.up);
        break;
      case keyCodes.right:
        isExec = konami.push(keys.right);
        break;
      case keyCodes.down:
        isExec = konami.push(keys.down);
        break;
      default:
        break;
    }

    if (isExec) {
      setRotateProfile((rotateProfile) => rotateProfile + 500);
    }


  }
  useEffect(() => {


    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e));
    };
  }, []);

  const [rotateProfile, setRotateProfile] = useState<number>(0);

  const keys = {
    a: "a",
    b: "b",
    left: "left",
    up: "up",
    right: "right",
    down: "down",
  }
  const konami: { complete: string[], _status: string[], push: (key: string) => boolean } = {
    complete: [
      keys.up, keys.up, keys.down, keys.down,
      keys.left, keys.right, keys.left, keys.right,
      keys.b, keys.a
    ],
    _status: [],
    push: (key: string) => {
      // とりあえず追加する．
      konami._status.push(key)
      const strComp = konami.complete.join("");
      const strStat = konami._status.join("");
      console.log(key, konami._status)
      if (strComp === strStat) {
        // 合致した場合．
        konami._status = [];
        return true;
      } else if (strComp.startsWith(strStat)) {
        // 先頭部分文字列の場合
        return false;
      } else {
        // 部分文字列にならなかった時
        if (
          (konami._status.length === 3) &&
          (konami._status.every(ele => ele === konami.complete[0]))
        ) {
          konami._status.pop()
        } else {
          konami._status = [];

        }
        return false;
      }

    }

  }


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