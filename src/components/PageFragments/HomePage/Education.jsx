import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Config from '../../../../config';

const generateEducationTimeline = (data) => (
  <TimelineEvent
    title={data.location}
    titleStyle={{ fontSize: '12pt', fontWeight: 'bold' }}
    subtitle={data.title}
    subtitleStyle={{ fontSize: '12pt', fontWeight: '400' }}
    createdAt={data.date}
    style={{ fontSize: '12pt', fontWeight: '300' }}
    iconStyle={{ cursor: 'default' }}
    key={data.title}
  />
);


const previousEducationTimeLine = Config.education.slice(0,
  Config.education.length - 1);
const lastEducationTimeLine = Config.education.slice(
  Config.education.length - 1);


const Education = () => (
  <div style={{ marginTop: '0.8rem' }}>
    <>
      <h2 style={{ marginBottom: '0rem' }}>Education</h2>
      {Config.education.length > 1 && (
        <Timeline lineStyle={{ top: '20px' }}>
          {previousEducationTimeLine.map(generateEducationTimeline)}
        </Timeline>
      )}
      {Config.education.length > 0 && (
        <Timeline lineStyle={{ display: 'none' }}
                  style={{ top: '-30px' }}>
          {lastEducationTimeLine.map(generateEducationTimeline)}
        </Timeline>
      )}
    </>

  </div>
);

export default Education;
