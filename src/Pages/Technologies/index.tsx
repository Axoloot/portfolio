import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DrawerProps } from '../../misc/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import Tech from '../../Components/Tech';

interface TechProps extends DrawerProps {
  techStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 1em;
`;

const TechWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const TechCategories = styled(motion.div)<{
  color?: string;
  isFullWidth?: boolean;
}>`
  justify-content: inherit;
  height: 20em;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '20em')};
  margin: 0.5em;
  border: solid 0.1em ${({ color }) => color ?? 'green'};
  border-radius: 0.5em 0.5em 0;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
`;

const TechCategoriesTitle = styled.div<{ color?: string }>`
  align-self: end;
  border-radius: 0.3em 0 0;
  background: ${({ color }) => color ?? 'red'};
  position: absolute;
  right: 0;
  bottom: 0;
`;

const techs = {
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  frontend: ['React', 'Angular', 'Vue.js', 'Svelte'],
  backend: ['Node.js', 'Express.js', 'Django', 'Flask'],
};

const Technologies = ({ homeCursor, setPos, techStatus }: TechProps) => {
  const techRef = useRef<HTMLInputElement>(null);
  const [viewed, setViewed] = techStatus;
  const [width, setWidth] = useState(viewed ? 320 : 120);
  const [height, setHeight] = useState(viewed ? 320 : 120);

  const containerVariants = {
    hidden: {},
    visible: (custom: number) => ({
      transition: {
        staggerChildren: 0.5,
        delayChildren: custom,
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: viewed ? 1 : 0 },
    visible: { opacity: 1 },
  };

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
      animate(200, 200);
      if (homeCursor) setTimeout(homeCursor, 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [animate, homeCursor]);

  useEffect(() => {
    if (viewed) return;
    const run = startAnimations();
    setViewed(true);
    return run;
  }, [startAnimations, setViewed]);

  return (
    <TechContainer>
      <TechWrapper
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        custom={2}
      >
        <TechCategories
          color="purple"
          ref={techRef}
          initial={{ width, height }}
          animate={{ width, height }}
          transition={{
            ease: 'anticipate',
            duration: 1,
          }}
        >
          {techs.devops.map(techname => (
            <Tech key={techname} name={techname} />
          ))}
          <TechCategoriesTitle color="purple">DevOps</TechCategoriesTitle>
        </TechCategories>
        <TechCategories color="tan" variants={itemVariants}>
          {techs.frontend.map(techname => (
            <Tech key={techname} name={techname} />
          ))}
          <TechCategoriesTitle color="tan">Frontend</TechCategoriesTitle>
        </TechCategories>
        <TechCategories color="orange" variants={itemVariants}>
          {techs.backend.map(techname => (
            <Tech key={techname} name={techname} />
          ))}
          <TechCategoriesTitle color="orange">Backend</TechCategoriesTitle>
        </TechCategories>
        <TechCategories color="blue" variants={itemVariants} isFullWidth>
          <TechCategoriesTitle color="blue">????</TechCategoriesTitle>
        </TechCategories>
      </TechWrapper>
    </TechContainer>
  );
};

export default Technologies;
