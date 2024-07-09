import React, { useState, useRef } from 'react';
import {
  Page,
  Content,
  Line,
  Section,
  Timeline,
  TimelineDot,
  TimelineItem,
} from './styles';

const baseYears = [
  { year: 2018, type: 'school', y: 0 },
  { year: 2019, y: 0 },
  { year: 2021, type: 'school', y: 0 },
  { year: 2022, y: 0 },
  { year: 2023, type: 'school', y: 0 },
  { year: 2024, y: 0 },
];

const App: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [years, setYears] = useState(baseYears);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const index = sectionsRef.current.findIndex(section => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0;
    });
    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  return (
    <Page>
      <Timeline sectionNb={years.length}>
        <Line red />
        <Line animate={{ height: years[activeIndex].y + 30 }} />
        {years.map((section, index) => (
          <TimelineItem
            key={section.year}
            ref={el => {
              const rect = el?.getBoundingClientRect();
              years[index].y = rect?.y || 0;
              setYears(baseYears);
            }}
          >
            <TimelineDot
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
                backgroundColor:
                  activeIndex >= index
                    ? section.type === 'school'
                      ? 'green'
                      : 'green'
                    : 'grey',
              }}
            />
          </TimelineItem>
        ))}
      </Timeline>
      <Content onScroll={handleScroll}>
        {years.map((_, index) => (
          <Section key={index} ref={el => (sectionsRef.current[index] = el!)}>
            {years[index].year}
          </Section>
        ))}
      </Content>
    </Page>
  );
};

export default App;
