import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DrawerProps } from '../../misc/types';
import { useCallback, useEffect, useRef, useState } from 'react';

const TechWrapper = styled.div`
  background: green;
  display: flex;
  padding: 1em;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TechCategories = styled(motion.div)<{ color?: string }>`
  height: 5em;
  width: 5em;
  margin: 1em;
  border: solid 0.1em ${({ color }) => color ?? 'green'};
  border-radius: 0.5em 0.5em 0;
  display: flex;
  justify-content: end;
`;

const TechCategoriesTitle = styled.div<{ color?: string }>`
  align-self: end;
  border-radius: 0.3em 0 0;
  background: ${({ color }) => color ?? 'red'};
`;

const Technologies = (props: DrawerProps) => {
  const techRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(80);
  const { setPos } = props;

  const animate = useCallback(
    (Woffset?: number, Hoffset?: number) => {
      const pos = techRef.current?.getBoundingClientRect();
      if (pos && setPos) {
        setPos({
          x: pos.x + width + (Woffset || 0),
          y: pos.y + height + (Hoffset || 0),
        });
      }
    },
    [width, height, setPos]
  );

  const startAnimations = useCallback(() => {
    animate();
    const timeout = setTimeout(() => {
      setWidth(width + 240);
      setHeight(height + 240);
      animate(width + 140, height + 140);
      if (props.homeCursor) setTimeout(props.homeCursor, 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(startAnimations, 100);
    return () => clearTimeout(timeout);
  }, [startAnimations]);

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
