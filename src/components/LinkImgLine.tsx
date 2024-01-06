import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const LinkImgLine: React.FC<{ link: string, img: string, line: string, margin: number }> = (props) => {

  return (
    <>
      {/* 画像 */}
      <Link
        underline="none"
        color="inherit"
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
        marginBottom={2}
      >

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: "40%",
            background: '#ffffff'
          }}

        >
          <Box
            component="img"
            src={props.img}
            alt=""
            style={{
              maxHeight: "100%",
              width: "auto",
              margin: `${props.margin}%`,

            }}

          />

        </Box>

        {/* タイトル */}
        <Typography marginY={1} variant="h4" component="h2" align="center">
          {props.line}
          {/* <LinkLine link={props.link} line={props.title} /> */}
        </Typography>
      </Link>
    </>
  );
};

export default LinkImgLine;