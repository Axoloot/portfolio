import { DrawerProps } from '../../misc/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import TechCategory from '../../Components/TechCategories';
import pointers from '../../Components/Cursor/mouseIcon';
import { TechContainer, TechWrapper } from './styles';

interface TechProps extends DrawerProps {
  techStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const baseCategory = [
  { name: 'devops', title: 'DevOps', color: 'tan', hidePane: false },
  { name: 'frontend', title: 'FrontEnd', color: 'blue', hidePane: false },
  { name: 'backend', title: 'BackEnd', color: 'yellow', hidePane: false },
  // { name: 'devops', title: 'DevOps', color: 'tan' },
];

const Technologies = ({
  homeCursor,
  setPos,
  techStatus,
  click,
  setCursorImg,
}: TechProps) => {
  const [Categories, setCategories] = useState(baseCategory);
  const [viewed, setViewed] = techStatus;
  const [width, setWidth] = useState(viewed ? 300 : 100);
  const [height, setHeight] = useState(viewed ? 420 : 120);
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
    if (!CategRef.current[1]) return;
    const timeout = setTimeout(() => {
      if (!CategRef.current[1]) return;
      const { height, width } = CategRef.current[1].getBoundingClientRect();
      animate(1, (width / 2) * -1, (height / 2) * -1);
      Click();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [animate, Click]);

  const FirstAnim = useCallback(() => {
    animate(0);
    const timeout = setTimeout(() => {
      setCursorImg && setCursorImg(pointers.drag);
      setWidth(width => width + 200);
      setHeight(height => height + 300);
      animate(0, 200, 300);
      HomeAnime(() => {
        setCursorImg && setCursorImg(pointers.cursor);
        setViewed(true);
        SecondAnim();
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [animate, HomeAnime, SecondAnim, setViewed, setCursorImg]);

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
