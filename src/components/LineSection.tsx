import { Typography } from '@mui/material';
import React from 'react';

const LineSection: React.FC<{ line: string }> = (props) => {

  return (
    <>
      <Typography paddingLeft={3} variant="h2">
        {props.line}
      </Typography>
    </>
  );
};

export default LineSection;