import { Timeline } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import React from 'react';
import Event, { tEvent } from './Event';
import dirJobs from 'src/data/Root/Users/mattsunkun/about/history/jobs';
import { file } from 'src/data/Root';
import dirExperiences from 'src/data/Root/Users/mattsunkun/about/history/experiences';
import dirQualifications from 'src/data/Root/Users/mattsunkun/about/history/qualifications';
import dirSchools from 'src/data/Root/Users/mattsunkun/about/history/schools';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const priority: number = 1;

const EventsLine: React.FC<{ line: string }> = (props) => {



  const filesEvent: file[] = [
    ...dirExperiences.files,
    ...dirJobs.files,
    ...dirQualifications.files,
    ...dirSchools.files,
  ];

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


  // 時間でソートし，逆順にする．(時間定義されていないと今の日付になる．)
  events.sort((a, b) =>
    a.date.getTime() -
    b.date.getTime()
  )
    .reverse();
  return (
    <>
      <Box

      >
        <Timeline
          //       position="alternate"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {
            events.map((event, ind) => {
              return <Event key={ind}
                {...event} />
            })
          }
        </Timeline>
      </Box>

    </>
  );
};

export default EventsLine;