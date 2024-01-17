import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { dateNormalForm } from 'src/functions/utils';

export type tEvent = {
  date: Date,
  event: string,
  title: string,
  description?: string,
};

const Event: React.FC<tEvent> = (props) => {

  return (
    <>
      <TimelineItem
      // position="alternate"
      >

        {/* Left */}
        <TimelineOppositeContent>
          {`${dateNormalForm(props.date).year}.${dateNormalForm(props.date).month} ${props.event}`}
        </TimelineOppositeContent>

        {/* Separator */}
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        {/* Right */}
        <TimelineContent>
          <Paper>
            <Grid container spacing={1}
            >
              <Grid item xs={12} md={12}>
                <Typography variant={props.description ? "body1" : "caption"}>
                  {props.title}
                </Typography>

              </Grid>
              {(props.description) ?
                <Grid item xs={12} md={12}>
                  <Typography variant="caption">
                    {props.description}
                  </Typography>

                </Grid> : <></>
              }
            </Grid>

          </Paper>
        </TimelineContent>

      </TimelineItem>
    </>
  );
};

export default Event;