import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DrawerProps } from '../../misc/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import TechCategory from '../../Components/TechCategories';

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

const baseCategory = [
  { name: 'devops', title: 'DevOps', color: 'tan', hidePane: false },
  { name: 'frontend', title: 'FrontEnd', color: 'blue', hidePane: false },
  { name: 'backend', title: 'BackEnd', color: 'yellow', hidePane: false },
  // { name: 'devops', title: 'DevOps', color: 'tan' },
];

const Technologies = ({ homeCursor, setPos, techStatus, click }: TechProps) => {
  const [Categories, setCategories] = useState(baseCategory);
  const [viewed, setViewed] = techStatus;
  const [width, setWidth] = useState(viewed ? 320 : 120);
  const [height, setHeight] = useState(viewed ? 320 : 120);
  const CategRef = useRef<HTMLDivElement[]>([]);

  const containerVariants = {
    hidden: {},
    visible: (custom: number) => ({
      transition: {
        staggerChildren: 0.5,
        delayChildren: custom,
      },
    }),
  };

  const animate = useCallback(
    (elem: number, Woffset?: number, Hoffset?: number) => {
      const pos = CategRef.current[elem]?.getBoundingClientRect();
      if (pos && setPos) {
        setPos({
          x: pos.x + pos.width + (Woffset || 0),
          y: pos.y + pos.height + (Hoffset || 0),
        });
      }
    },
    [setPos]
  );

  const HomeAnime = useCallback(
    (cb?: () => void) => {
      const timeout = setTimeout(() => {
        homeCursor && homeCursor();
        cb && cb();
      }, 1000);
      return () => clearTimeout(timeout);
    },
    [homeCursor]
  );

  const Click = useCallback(() => {
    const timeout = setTimeout(() => {
      click && click();
      HomeAnime();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [click, HomeAnime]);

  const SecondAnim = useCallback(() => {
    const timeout = setTimeout(() => {
      const { height, width } = CategRef.current[1].getBoundingClientRect();
      animate(1, (width / 2) * -1, (height / 2) * -1);
      Click();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [animate, Click]);

  const FirstAnim = useCallback(() => {
    animate(0);
    const timeout = setTimeout(() => {
      setWidth(width => width + 200);
      setHeight(height => height + 200);
      animate(0, 200, 200);
      HomeAnime(() => {
        setViewed(true);
        SecondAnim();
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [animate, HomeAnime, SecondAnim, setViewed]);

  useEffect(() => {
    if (viewed) return;
    return FirstAnim();
  }, [FirstAnim, setViewed, viewed]);

  const toggleHidden = (index: number) => {
    setCategories(prevCategories =>
      prevCategories.map((c, i) =>
        i !== index ? { ...c, hidePane: !c.hidePane } : c
      )
    );
  };

  return (
    <TechContainer>
      <TechWrapper
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        custom={2}
      >
        {Categories.map((c, i) => {
          if (!i)
            return (
              <TechCategory
                onClickCb={() => toggleHidden(i)}
                ref={el => (CategRef.current[i] = el!)}
                key={c.title}
                viewed={viewed}
                initial={{ width, height }}
                animate={{ width, height }}
                transition={{
                  ease: 'anticipate',
                  duration: 1,
                }}
                {...c}
              />
            );
          return (
            <TechCategory
              onClickCb={() => toggleHidden(i)}
              ref={el => (CategRef.current[i] = el!)}
              viewed={viewed}
              key={c.title}
              {...c}
            />
          );
        })}
        {/* <TechCategories
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
        </TechCategories> */}
      </TechWrapper>
    </TechContainer>
  );
};

export default Technologies;
