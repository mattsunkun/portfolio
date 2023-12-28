import { AccessTime } from "@mui/icons-material";
import {
  createTheme,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box, Link } from "@mui/material";
import React from "react";

import { tAbility } from "../data";
import LinkLine from "./LinkLine";
export type tCard = Pick<tAbility, "title" | "link" | "img" | "since" | "passed" | "description" | "relLink">;
const Card: React.FC<tCard> = (props) => {
  return (
    <Grid item xs={6} md={4} >
      <Paper square={false} elevation={3} className="paper" sx={{ height: "40vh" }}>
        {/* 画像 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: "40%"
          }}
        >
          <Box
            component="img"
            src={props.img}
            alt=""
            style={{
              maxHeight: "100%",
              width: "auto",
              margin: "3%",

            }}

          />
        </Box>
        {/* 文字 */}
        <Box
          sx={{
            paddingX: 2,
          }}
        >
          {/* タイトル */}
          <Typography marginY={-3} variant="h4" component="h2" align="center">
            <LinkLine link={props.relLink} line={props.title} />
          </Typography>

          {/* 年 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // 右寄せ
              marginTop: -1, // 上の余白を追加（任意で調整）
            }}
          >
            <Typography variant="body2" component="p" marginLeft={0.5}>

              {props.passed ?
                `経験 約${Math.ceil((
                  (new Date().getTime()) - (props.since.getTime())
                ) /
                  (1000 * 60 * 60 * 24 * 365) * 10) / 10
                }年` :
                `${(props.since.getMonth() === 0) ?
                  props.since.getFullYear() - 1 :
                  props.since.getFullYear()
                }年
                ${(props.since.getMonth() === 0) ?
                  12 :
                  props.since.getMonth()
                }月`}
            </Typography>
          </Box>

          {/* 説明 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={1}
          >
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {props.description}
            </Typography>
          </Box>

        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;