import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DrawerProps } from '../../misc/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import Tech from '../../Components/Tech';

const TechWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 1em;
`;

const TechCategories = styled(motion.div)<{ color?: string }>`
  height: 5em;
  width: 5em;
  margin: 1em 0;
  border: solid 0.1em ${({ color }) => color ?? 'green'};
  border-radius: 0.5em 0.5em 0;
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

const TechCategoriesTitle = styled.div<{ color?: string }>`
  align-self: end;
  border-radius: 0.3em 0 0;
  background: ${({ color }) => color ?? 'red'};
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Technologies = ({ homeCursor, setPos }: DrawerProps) => {
  const techRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(80);

  const animate = useCallback(
    (Woffset?: number, Hoffset?: number) => {
      const pos = techRef.current?.getBoundingClientRect();
      if (Woffset) setWidth(width => width + Woffset);
      if (Hoffset) setHeight(height => height + Hoffset);
      if (pos && setPos) {
        setPos({
          x: pos.x + pos.width + (Woffset || 0),
          y: pos.y + pos.height + (Hoffset || 0),
        });
      }
    },
    [setPos]
  );

  const startAnimations = useCallback(() => {
    animate();
    const timeout = setTimeout(() => {
      animate(240, 240);
      if (homeCursor) setTimeout(homeCursor, 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [animate, homeCursor]);

  useEffect(startAnimations, [startAnimations]);

  return (
    <TechWrapper>
      <TechCategories
        color="purple"
        ref={techRef}
        animate={{ width, height }}
        transition={{
          ease: 'anticipate',
          duration: 1,
        }}
      >
        <TechCategoriesTitle color="purple">DevOps</TechCategoriesTitle>
      </TechCategories>
      <TechCategories color="purple" style={{ height: '20em', width: '20em' }}>
        <Tech name="react" />
        <Tech name="react" />
        <Tech name="react" />
        <Tech name="react" />
        <Tech name="react" />
        {/* <Tech name="react" /> */}
        <TechCategoriesTitle color="purple">Frontend</TechCategoriesTitle>
      </TechCategories>
      <TechCategories color="orange" style={{ height: '20em', width: '20em' }}>
        <TechCategoriesTitle color="orange">Backend</TechCategoriesTitle>
      </TechCategories>
      <TechCategories color="blue" style={{ height: '20em', width: '20em' }}>
        <TechCategoriesTitle color="blue">DevOps</TechCategoriesTitle>
      </TechCategories>
    </TechWrapper>
  );
};

export default Technologies;
