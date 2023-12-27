import { AccessTime } from "@mui/icons-material";
import {
  createTheme,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const diffDate = (startDate: Date): { years: number, months: number } => {
  const currentDate = new Date();

  const elapsedMilliseconds = currentDate.getTime() - startDate.getTime();
  const elapsedSeconds = elapsedMilliseconds / 1000;
  const elapsedMinutes = elapsedSeconds / 60;
  const elapsedHours = elapsedMinutes / 60;
  const elapsedDays = elapsedHours / 24;

  // 年数を計算
  const elapsedYears = Math.floor(elapsedDays / 365);

  // 月数を計算
  const remainingDays = Math.floor(elapsedDays % 365);
  const elapsedMonths = Math.floor(remainingDays / 30);

  return { years: elapsedYears, months: elapsedMonths };
};

// // 例: 2020年1月1日からの経過年数と経過月数を計算
// const startDate = new Date(2020, 0, 1); // 月は0から始まるため、1月は0
// const { years, months } = calculateElapsedYearsMonths(startDate);

// console.log(`経過年数: ${years} 年`);
// console.log(`経過月数: ${months} 月`);

const Card: React.FC<{
  img: string,
  title: string,
  since: Date,
  passed: boolean,
  description: string,
  relevantLink: any
}> = (props) => {
  return (
    <Grid item xs={6} md={4} >
      <Paper square={false} elevation={3} className="paper" sx={{ height: "40vh" }}>
        {/* 画像 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            height: "50%"
          }}
        >
          <img
            src={props.img}
            alt=""
            style={{
              maxHeight: '100%',
              width: 'auto',
              margin: "3%"
              // alignSelf: 'center', // 画像自体を中央に配置

            }}
          />
        </Box>
        {/* 文字 */}
        <Box
          sx={{
            paddingX: 1,
          }}
        >
          {/* タイトル */}
          <Typography variant="h4" component="h2" align="center">
            {props.title}
          </Typography>
          {/* 年 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // 右寄せ
              // marginTop: 1, // 上の余白を追加（任意で調整）
            }}
          >
            <Typography variant="body2" component="p" marginLeft={0.5}>

              {props.passed ?
                `経験年数 約${Math.ceil((
                  (new Date().getTime()) - (props.since.getTime())
                ) /
                  (1000 * 60 * 60 * 24 * 365) * 10) / 10
                }年` :
                `${props.since.getFullYear()}年${props.since.getMonth()}月 取得`}
            </Typography>
          </Box>




          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {props.description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >

            <Typography variant="body2" component="p" marginLeft={1.5}>
              {props.relevantLink}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;