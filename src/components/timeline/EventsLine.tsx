import { Timeline } from '@mui/lab';
import { Typography } from '@mui/material';
import React from 'react';
import Event from './Event';
const EventsLine: React.FC<{ line: string }> = (props) => {

  return (
    <>
      <Timeline >
        <Event line="hello" />
        <Event line="hello" />
        <Event line="hello" />
        <Event line="hello" />
      </Timeline>
    </>
  );
};

export default EventsLine;