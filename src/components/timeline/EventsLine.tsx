import { Timeline } from '@mui/lab';
import { Typography, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import Event, { tEvent } from './Event';
import dirJobs from 'src/data/Root/Users/mattsunkun/about/history/jobs';
import { file } from 'src/data/fileSystem';
import dirExperiences from 'src/data/Root/Users/mattsunkun/about/history/experiences';
import dirQualifications from 'src/data/Root/Users/mattsunkun/about/history/qualifications';
import dirSchools from 'src/data/Root/Users/mattsunkun/about/history/schools';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { dateNormalForm } from 'src/functions/utils';
import LineSection from '../LineSection';

const EventsLine: React.FC<{}> = (props) => {

  const [priority, setPriority] = useState<number>(0);


  const filesEvent: file[] = [
    ...dirExperiences.files,
    ...dirJobs.files,
    ...dirQualifications.files,
    ...dirSchools.files,
  ];
  // console.log(dirJobs.name);
  // console.log(dirExperiences.name);

  const events: tEvent[] = filesEvent.reduce((acc: tEvent[], cur: file) => {
    // 
    const appendy: tEvent[] = [];
    const regexEvent: RegExp = /\([^\(\)]*\)$/g;
    const contentsParse = {
      main: cur.contents.replace(regexEvent, ""),
      startEvent: (cur.contents.match(regexEvent) ?? ["(stERROR/edERROR)"])[0]
        .replace(/[\(,\)]/g, "")
        .replace(/\/.*$/g, ""),
      endEvent: (cur.contents.match(regexEvent) ?? ["(stERROR/edERROR)"])[0]
        .replace(/[\(,\)]/g, "")
        .replace(/^.*\//g, ""),
    }
    // const a = (cur.contents.match(regexEvent) ?? ["(stERROR/edERROR)"])[0]
    // const b = a.replace(/[\(,\)]/g, "")
    // const c = b.replace(/^.*\//g, "")
    // const c2 = b.replace(/\/.*$/g, "")
    // console.log(c)
    if ((cur.meta?.priority ?? 100) <= priority) {
      if (cur.meta?.start) {
        appendy.push({
          date: cur.meta?.start,
          event: contentsParse.startEvent,
          title: cur.name,
          description: contentsParse.main,
        });
      }
      if (cur.meta?.end) {
        appendy.push({
          date: cur.meta?.end,
          event: contentsParse.endEvent,
          title: cur.name,
          // description: // 終わりは解説をしないためいらない．
        });
      }
    }

    return acc.concat(appendy)
  }, []
  )


  // 時間でソートし，(時間定義されていないと今の日付になる．)
  events.sort((a, b) =>
    a.date.getTime() -
    b.date.getTime()
  )
  //.reverse();
  return (
    <>
      <Box

      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin={3}
          marginBottom={6}
        >

          <ToggleButtonGroup
            color="primary"
            value={priority}
            exclusive
            onChange={(
              event: React.MouseEvent<HTMLElement>,
              newPriotiry: number,
            ) => {
              setPriority(newPriotiry)
            }}
            aria-label="Platform"
          >
            <ToggleButton value={0}>重要度高</ToggleButton>
            <ToggleButton value={1}>重要度中</ToggleButton>
            <ToggleButton value={2}>重要度低</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Timeline
          //       position="alternate"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {
            events.map((event, ind, arr) => {
              return <Event key={ind}
                {...event}
                isHideYear={
                  ind !== 0 &&
                  (
                    dateNormalForm(arr[Math.max(ind - 1, 0)].date).year ===
                    dateNormalForm(arr[ind].date).year
                  )
                }
              />
            })
          }
        </Timeline>
      </Box>

    </>
  );
};

export default EventsLine;