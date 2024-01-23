import React, { useContext } from "react";
import { Grid, IconButton, Paper, Typography, Box } from "@mui/material";

import LinkLine from "./LinkLine";

import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import { darkModeContext, tBooleanSet } from 'src/App';
import { extention, file } from "src/data/fileSystem";
import { dateNormalForm } from "src/functions/utils";

const Card: React.FC<file> = (props) => {
  const frameRadius: number = 30;
  const imgHeight: number = 40;

  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) || {}) as tBooleanSet;

  const subsOpacity: number = 0.7;
  // 大きさ制御
  const windowWidth: number = window.innerWidth;
  const cardFixedWidth: number = 360;
  const padRight: number = 30;
  const cardFixedHeight: number = cardFixedWidth * 3 / 4;
  const {
    name: pTitle,
    contents: pDescription,
    meta: pMeta,
  } = props;
  const {
    img: pImg,
    imgRightsLink: _pImgRightsLink,
    start: pStart,
    period: pPeriod,
    urls: pUrls,
  } = (pMeta || {}) as extention;
  const pImgRightsLink = _pImgRightsLink || "";
  const pWorkUrl = pUrls?.[0] || "";
  const pCodeUrl = pUrls?.[1] || "";


  //   console.log(windowWidth)
  return (
    <Grid item
      xs={13}
      sm={7}
      md={5}
      lg={4}
      // xl={3}
      justifyContent="center" // 横方向の中央寄せ
      alignItems="center" // 縦方向の中央寄せ
    >
      <Paper
        square={false} elevation={0} className="paper"
        sx={{
          height: `${windowWidth > cardFixedWidth ? `${cardFixedHeight}px` : `${cardFixedHeight}px`}`,
          width: `${windowWidth > cardFixedWidth ? `${cardFixedWidth}px` : windowWidth}`,
        }}
        style={{
          borderRadius: `${frameRadius}px`,
          // 輪郭の色設定
          border: `2px solid #${isDarkMode ? "FFF" : "000"}`,
          overflow: 'hidden',
        }}>
        {/* 画像 */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', // 上部基準に変更
            height: `${imgHeight}%`,
            overflow: 'hidden', // はみ出た部分を隠す
          }}
        >
          <Box
            component="img"
            src={pImg}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              top: 0,

              borderRadius: `${frameRadius * imgHeight / 100}px ${frameRadius * imgHeight / 100}px 0 0`,
            }}
          />

          {/* 右下の文字 */}
          {
            pImgRightsLink !== "" ?

              <Box
                margin="3px"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: "rgba(255, 255, 255, 1.0)", // `${isDarkMode ? "rgba(255, 255, 255, 1.0)" : "rgba(255, 255, 255, 1.0)"}`,
                  borderRadius: "12px", // 適切な値に調整
                  fontSize: '12px',
                  // color: "rgba(0, 0, 0, 1.3)",
                }}
              >
                <Link
                  to={pImgRightsLink}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 1.0)",
                  }}
                >
                  {"　引用元　"}
                </Link>

              </Box> :
              ""

          }



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
              (pWorkUrl === "") ?
                <Box
                  margin={2}
                >

                  {pTitle}
                </Box> :
                <LinkLine
                  link={pWorkUrl}
                  line={pTitle}
                  isUnderLine />
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
            <Typography variant="body2" component="p" marginLeft={0.5}
              sx={{
                opacity: subsOpacity,
              }}
            >
              {pDescription}
            </Typography>
          </Box>
          {/* bottom */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: "12px",
              //               opacity: 0.

            }}
          >
            <Box margin={0.5}>

              <Link to={pCodeUrl}
                style={{
                  visibility: `${(pCodeUrl === "") ? "hidden" : "inherit"}`,

                }}
                target="_blank"
              >
                <IconButton ><GitHubIcon /></IconButton>
              </Link>

            </Box>

            {/* 年 */}
            <Typography variant="caption" component="p"
              sx={{
                paddingRight: 1,
                fontSize: "12px",
                opacity: subsOpacity,
              }}>
              {
                `開発期間：${
                // (pStart?.getMonth() === 0) ?
                // pStart?.getFullYear() - 1 :
                // pStart?.getFullYear()
                dateNormalForm(pStart).year
                }年${
                // (pStart?.getMonth() === 0) ?
                // 12 :
                // pStart?.getMonth()
                dateNormalForm(pStart).month
                }月から約${pPeriod}ヶ月`
              }
            </Typography>

          </Box>
        </Box>

      </Paper>
    </Grid >
  );
};

export default Card;