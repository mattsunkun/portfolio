import React from "react";
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import LinkLine from "./LinkLine";

import GitHubIcon from '@mui/icons-material/GitHub';
import { tWork } from "../data/work";
import { Link } from "react-router-dom";


const Card: React.FC<tWork> = (props) => {
  const frameRadius = "30px"
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Paper square={false} elevation={0} className="paper"
        sx={{
          // height: "40vh",
          height: "300px",
          width: "400px",
          // width: "40vw", 
        }}
        style={{
          borderRadius: frameRadius,
          border: "2px solid #000",
          overflow: 'hidden',
        }}>
        {/* 画像 */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', // 上部基準に変更
            height: '40%',
            overflow: 'hidden', // はみ出た部分を隠す
          }}
        >
          <Box
            component="img"
            src={props.img}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              top: 0,

              borderRadius: `${frameRadius} ${frameRadius} 0 0`,
            }}
          />
        </Box>
        {/* 文字 */}
        <Box
          sx={{
            paddingX: 2.5,
          }}
        >
          {/* タイトル */}
          <Typography marginY={0} variant="h5" component="h2" align="center">
            {
              (props.workUrl === "") ?
                <Box
                  margin={2}
                >

                  {props.title}
                </Box> :
                <LinkLine link={props.workUrl} line={props.title} isUnderLine />
            }

          </Typography>

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
          {/* bottom */}
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: "12px" }}
          >
            <Box margin={0.5}>
              {
                (props.codeUrl === "") ?
                  <></> :

                  <Link to={props.codeUrl}>
                    <IconButton ><GitHubIcon /></IconButton>
                  </Link>
              }
            </Box>

            {/* 年 */}
            <Typography variant="caption" component="p" sx={{ paddingRight: 1, fontSize: "12px" }}>
              {
                `開発期間：${(props.start.getMonth() === 0) ?
                  props.start.getFullYear() - 1 :
                  props.start.getFullYear()
                }年${(props.start.getMonth() === 0) ?
                  12 :
                  props.start.getMonth()
                }月から約${props.period}ヶ月`
              }
            </Typography>

          </Box>
        </Box>

      </Paper>
    </Grid >
  );
};

export default Card;