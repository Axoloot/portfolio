import React, { useCallback, useEffect, useRef, useState } from 'react';
import TechCategory from '../../Components/TechCategories';
import pointers from '../../misc/mouseIcon';
import { TechContainer, TechWrapper } from './styles';
import useWindowDimensions from '../../misc/dimension';
import { useCursor } from '../../Contexts/useCursor';

interface TechProps {
  techStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const baseCategory = [
  { name: 'devops', title: 'DevOps', color: '#ba3f2c', $hidePane: false },
  { name: 'frontend', title: 'FrontEnd', color: '#a33726', $hidePane: false },
  { name: 'backend', title: 'BackEnd', color: '#8b2f21', $hidePane: false },
];

const Technologies = ({ techStatus }: TechProps) => {
  const { isMobile } = useWindowDimensions();
  const [Categories, setCategories] = useState(baseCategory);
  const [viewed, setViewed] = techStatus;
  const [width, setWidth] = useState<string | number>(viewed ? 420 : 120);
  const [height, setHeight] = useState(viewed ? 420 : 120);
  const CategRef = useRef<HTMLDivElement[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const { setPos, homeCursor, click, setCursorImg } = useCursor();

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
        homeCursor();
        cb && cb();
      }, 1000);
      return () => clearTimeout(timeout);
    },
    [homeCursor]
  );

  const Click = useCallback(() => {
    const timeout = setTimeout(() => {
      click();
      HomeAnime();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [click, HomeAnime]);

  const SecondAnim = useCallback(() => {
    const elemIndex = isMobile ? 0 : 1;
    if (!CategRef.current[elemIndex]) return;
    const timeout = setTimeout(() => {
      if (!CategRef.current[elemIndex]) return;
      const { height, width } =
        CategRef.current[elemIndex].getBoundingClientRect();
      animate(elemIndex, (width / 2) * -1, (height / 2) * -1);
      Click();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [animate, Click, isMobile]);

  const FirstAnim = useCallback(() => {
    animate(0);
    const timeout = setTimeout(() => {
      setCursorImg(pointers.drag);
      setWidth(width => (isMobile ? '100%' : (width as number) + 300));
      setHeight(height => height + 300);
      animate(0, 300, 300);
      HomeAnime(() => {
        setCursorImg(pointers.cursor);
        setViewed(true);
        SecondAnim();
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [animate, HomeAnime, SecondAnim, setViewed, setCursorImg, isMobile]);

  useEffect(() => {
    if (viewed) return;
    return FirstAnim();
  }, [FirstAnim, setViewed, viewed]);

  const toggleHidden = (index: number) => {
    setCategories(prevCategories =>
      prevCategories.map((c, i) =>
        i !== index ? { ...c, $hidePane: !c.$hidePane } : c
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
        ref={parentRef}
      >
        {Categories.map((c, i) => {
          return (
            <TechCategory
              $onClickCb={() => toggleHidden(i)}
              ref={el => (CategRef.current[i] = el!)}
              $parentRef={parentRef}
              key={c.title}
              $viewed={viewed}
              initial={
                !i
                  ? { width, height }
                  : { opacity: viewed ? 1 : 0, width: 420, height: 420 }
              }
              animate={!i && { width, height }}
              transition={{
                ease: 'anticipate',
                duration: 1,
              }}
              {...c}
            />
          );
        })}
      </TechWrapper>
    </TechContainer>
  );
};

export default Technologies;
