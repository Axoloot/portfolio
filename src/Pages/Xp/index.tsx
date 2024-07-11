import React, { useState, useRef, useEffect } from 'react';
import {
  Page,
  Content,
  Line,
  Section,
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineText,
} from './styles';
import JobsJSON from './jobs.json';
import { useAnimation } from 'framer-motion';
// import SchoolJSON from './schools.json';

interface sectionContent {
  year: number;
  y: number;
  type?: string;
  event: boolean;
}

const startYear = 2019;
const sectionsNb = new Date().getFullYear() - startYear + 1;
const baseSections: sectionContent[] = [...Array(sectionsNb)].map(
  (_, index) => {
    const year = startYear + index;
    const event = !!JobsJSON.find(xp => xp.year === year);
    return { year, event, y: 0 };
  }
);

const App: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [Sections, setSections] = useState(baseSections);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotY, setDotY] = useState(Sections[activeIndex].y);

  const handleScroll = () => {
    const index = sectionsRef.current.findIndex(section => {
      if (!section) return null;
      const rect = section.getBoundingClientRect();
      return rect.top >= 0;
    });
    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    setDotY(Sections[activeIndex].y);
  });

  const scrollToCurrent = (index: number) => {
    if (!Sections[index].event) return;
    setActiveIndex(index);
    sectionsRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <Page>
      <Timeline sectionNb={Sections.length}>
        <Line red />
        <Line animate={{ height: Sections[activeIndex].y }} />
        <TimelineDot
          drag="y"
          initial={{ y: Sections[activeIndex].y }}
          event
          onDrag={(event, info) => {
            const index = Sections.findIndex(s => {
              if (!s) return null;
              return info.point.y - s.y <= 50;
            });
            if (index !== -1) {
              scrollToCurrent(index);
            }
          }}
          onDragEnd={() => {
            setDotY(Sections[activeIndex].y);
          }}
          animate={{
            y: dotY,
          }}
          transition={{ ease: 'easeInOut' }}
          style={{ scale: 1.2, background: 'green', zIndex: 3 }}
        />
        {Sections.map((section, index) => (
          <TimelineItem
            onClick={() => {
              scrollToCurrent(index);
            }}
            key={section.year}
            ref={el => {
              const rect = el?.getBoundingClientRect();
              Sections[index].y = rect?.y || 0;
              setSections(baseSections);
            }}
          >
            <TimelineDot
              event={section.event}
              animate={{
                scale: 1,
                backgroundColor:
                  activeIndex >= index
                    ? section.type === 'school'
                      ? 'green'
                      : 'green'
                    : 'grey',
              }}
              transition={{ ease: 'easeInOut' }}
            />
            <TimelineText>{section.year}</TimelineText>
          </TimelineItem>
        ))}
      </Timeline>
      <Content onScroll={handleScroll}>
        {Sections.map(
          (_, index) =>
            Sections[index].event && (
              <Section
                key={index}
                ref={el => (sectionsRef.current[index] = el!)}
              >
                {Sections[index].year}
                <br />
                {
                  JobsJSON.find(({ year }) => year === Sections[index].year)
                    ?.company
                }
              </Section>
            )
        )}
      </Content>
    </Page>
  );
};

export default App;
