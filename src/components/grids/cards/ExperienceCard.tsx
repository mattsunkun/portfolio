import { AccessTime } from "@mui/icons-material";
import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Link } from "@mui/material";
import React from "react";

import LinkLine from "../../LinkLine";
import { tExperience } from "../../../data/experience";
import LinkImgLine from "../../LinkImgLine";
const ExperienceCard: React.FC<tExperience> = (props) => {
  return (
    <Grid item xs={6} md={4} >
      <Paper square={false} elevation={3} className="paper" sx={{ height: "40vh" }}>
        <LinkImgLine link={props.relLink} img={props.img} line={props.title} margin={0} />

        {/* 文字 */}
        <Box
          sx={{
            paddingX: 2,
          }}
        >

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
              {/* 開始 */}
              {

                `${(props.start.getMonth() === 0) ?
                  props.start.getFullYear() - 1 :
                  props.start.getFullYear()
                }年
              ${(props.start.getMonth() === 0) ?
                  12 :
                  props.start.getMonth()
                }月`
              }

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

export default ExperienceCard;