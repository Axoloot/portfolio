import React, { useState, useRef, useEffect } from 'react';
import {
  Page,
  Content,
  Line,
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineText,
} from './styles';
import JobsJSON from './jobs.json';
import XPPage from '../../Components/XPPage';
// import SchoolJSON from './schools.json';

interface Job {
  type: string;
  year: number;
  desc: string;
  shortDesc: string;
  company: string;
  image: string;
  dates: string;
}
interface sectionContent extends Job {
  event: boolean;
  y: number;
}

const startYear = 2019;
const sectionsNb = new Date().getFullYear() - startYear + 1;
const baseSections: sectionContent[] = [...Array(sectionsNb)].map(
  (_, index) => {
    const year = startYear + index;
    const event = JobsJSON.find(xp => xp.year === year) as Job;
    return { ...event, year, y: 0, event: !!event };
  }
);

const Xp = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [Sections, setSections] = useState(baseSections);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotY, setDotY] = useState(Sections[activeIndex].y);

  const handleScroll = () => {
    let closestIndex = -1;
    let closestDistance = Number.MAX_VALUE;

    sectionsRef.current.forEach((section, i) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
    });

    if (closestIndex !== -1) {
      setActiveIndex(closestIndex);
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
        <Line full />
        <Line animate={{ height: Sections[activeIndex].y }} />
        <TimelineDot
          drag="y"
          initial={{ y: Sections[activeIndex].y }}
          event
          dragElastic={1}
          onDrag={(event, info) => {
            const index = Sections.findIndex(s => {
              if (!s) return null;
              return info.point.y - s.y <= 50;
            });
            if (index !== -1) scrollToCurrent(index);
          }}
          onDragExit={() => {
            setDotY(Sections[activeIndex].y);
          }}
          animate={{ y: dotY }}
          transition={{ ease: 'easeInOut' }}
          style={{ scale: 1.2, background: '#e94f37', zIndex: 3 }}
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
              active={activeIndex >= index}
              animate={{ scale: 1 }}
              transition={{ ease: 'easeInOut' }}
            />
            <TimelineText>{section.year}</TimelineText>
          </TimelineItem>
        ))}
      </Timeline>
      <Content onScroll={handleScroll}>
        {Sections.map((sec, index) => {
          return (
            sec.event && (
              <XPPage
                ref={el => (sectionsRef.current[index] = el!)}
                section={sec}
              />
            )
          );
        })}
      </Content>
    </Page>
  );
};

export default Xp;
