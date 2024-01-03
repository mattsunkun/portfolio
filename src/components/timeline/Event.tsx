import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Typography } from '@mui/material';
import React from 'react';

const Event: React.FC<{ line: string }> = (props) => {

  return (
    <>
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {props.line}
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default Event;