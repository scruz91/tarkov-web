import * as React from 'react';
import { Timeline } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function SearchHistory({history}) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
        {history.map((item) => (   
                            <Grid item xs={4}>
                                      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          {new Date()}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{item}</TimelineContent>
      </TimelineItem> 
                            </Grid>                                 
                        ))}

    </Timeline>
  );
}
