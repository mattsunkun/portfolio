import { Typography } from '@mui/material';
import React from 'react';

const LineSection: React.FC<{ line: string }> = (props) => {

  return (
    <>
      <Typography
        paddingLeft={3}
        variant="h1"
        fontWeight="bold"
        // sx={{
        //   width: "100%",
        // }}
        paddingTop={8}
        paddingBottom={3}
      >
        {props.line}
      </Typography>
    </>
  );
};

export default LineSection;