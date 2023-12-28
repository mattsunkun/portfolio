import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Record: React.FC<{ ke: string, value: string }> = (props) => {

  return (
    <>
      <Grid item xs={12}>
        <Grid container >
          <Grid item xs={5}>
            <Typography align="left">
              {props.ke}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography align="left">
              ：{props.value}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Record;