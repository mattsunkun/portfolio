import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import { dateNormalForm, getTail } from 'src/functions/utils';

export type tEvent = {
  date: Date,
  event: string,
  title: string,
  description?: string,
  isHideYear?: boolean,
};

const Event: React.FC<tEvent> = (props) => {

  let color: string = "";
  switch (getTail(props.title.split(""))) {
    case "灰":
      color = "gray";
      break;
    case "茶":
      color = "brown";
      break;
    case "緑":
      color = "green";
      break;
    case "水":
      color = "aqua";
      break;
    default:
      break;
  }

  const margin: number = props.description ? 3 : 2;

  return (
    <>
      <TimelineItem
      // position="alternate"
      >

        {/* Left */}
        <TimelineOppositeContent>
          {
            props.isHideYear ?
              `${dateNormalForm(props.date).month}月` :
              `${dateNormalForm(props.date).year}年${dateNormalForm(props.date).month}月`
          }

        </TimelineOppositeContent>

        {/* Separator */}
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        {/* Right */}
        <TimelineContent>
          <Box
            marginTop={-margin}
            marginBottom={margin}
          >


            <Paper
            >
              <Grid container spacing={1}
              >
                <Grid item xs={12} md={12}>
                  <Box
                    padding={1}
                    paddingBottom={props.description ? 0 : 2}
                    display="flex"
                    alignItems="center"
                  // justifyContent="center"
                  >


                    <Typography
                      variant={props.description ? "h4" : "caption"}
                      color={color}
                    >
                      {props.title.charAt(0)}
                    </Typography>

                    <Typography
                      color={color}
                      paddingRight={1}
                      variant={props.description ? "body1" : "caption"}>
                      {props.title.slice(1)}
                    </Typography>

                    <Typography
                      variant="caption">
                      {props.event}
                    </Typography>

                  </Box>
                </Grid>
                {(props.description) ?
                  <Grid item xs={12} md={12}>
                    <Box
                      padding={1}
                      paddingTop={0}
                      paddingLeft={3}

                    >

                      <Typography
                        variant="caption">
                        {props.description}
                      </Typography>
                    </Box>

                  </Grid> : <></>
                }
              </Grid>

            </Paper>
          </Box>

        </TimelineContent>

      </TimelineItem>
    </>
  );
};

export default Event;