import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  ReactElement,
  useEffect,
} from 'react';
import { TargetAndTransition, Transition } from 'framer-motion';

import useWindowDimensions from '../misc/dimension';
import { Position } from '../misc/types';

const drag = require('../Static/cursors/drag.png') as string;
const cursor = require('../Static/cursors/cursor.png') as string;

interface Cursor {
  drag: string;
  cursor: string;
}

interface AnimationTransition {
  animation: TargetAndTransition;
  transition: Transition;
}

interface CursorContextFn {
  pos: Position;
  setPos: React.Dispatch<React.SetStateAction<Position>>;
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  cursorImg: string;
  setCursorImg: React.Dispatch<React.SetStateAction<string>>;
  click: () => () => void;
  homeCursor: () => void;
  resetAnimation: () => void;
  visibleCredits: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  drawerRef: React.MutableRefObject<HTMLDivElement | undefined>;
  initial: {
    x: number;
    y: number;
  };
  animation: AnimationTransition | null;
  cursors: Cursor;
}

const CursorContext = createContext<CursorContextFn>({} as CursorContextFn);

const pulsing: AnimationTransition = {
  animation: {
    scale: [1, 1.3, 1],
    rotate: [0, -10, 10, -10, 10, 0],
  },
  transition: {
    duration: 1.1,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const clicking: AnimationTransition = {
  animation: {
    scale: [0.6, 1],
  },
  transition: {
    duration: 1,
    ease: 'backOut',
  },
};

const base: AnimationTransition = {
  animation: {
    scale: 1,
    rotate: 0,
  },
  transition: {},
};

export const CursorProvider = ({ children }: { children: ReactElement }) => {
  const cursors = { drag, cursor };
  const { height, width, isMobile } = useWindowDimensions();
  const initial = useMemo(
    () =>
      isMobile ? { x: width - 30, y: height - 40 } : { x: 70, y: height - 30 },
    [height, isMobile, width]
  );
  const [pos, setPos] = useState<Position>(initial);
  const [hidden, setHidden] = useState(false);
  const [cursorImg, setCursorImg] = useState(cursors['cursor']);
  const [animation, setAnimation] = useState<AnimationTransition>(base);
  const drawerRef = useRef<HTMLDivElement>();
  const visibleCredits = useState(false);

  const click = useCallback(() => {
    setAnimation(clicking);
    const timeout = setTimeout(() => setAnimation(base), 1500);

    return () => clearTimeout(timeout);
  }, []);

  const homeCursor = useCallback(() => {
    setCursorImg(cursors.cursor);
    if (isMobile) return setPos(initial);
    const rect = drawerRef.current?.getBoundingClientRect();
    if (rect) setPos({ y: height - 30, x: rect.width / 2 - 8 });
  }, [initial, height, isMobile, cursors.cursor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(pulsing);
      const timeout = setTimeout(() => setAnimation(base), 5000);
      return () => clearTimeout(timeout);
    }, 35000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        pos,
        setPos,
        hidden,
        setHidden,
        cursorImg,
        setCursorImg,
        click,
        homeCursor,
        visibleCredits,
        drawerRef,
        initial,
        animation,
        cursors,
        resetAnimation: () => setAnimation(base),
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the context
export const useCursor = () => useContext(CursorContext);
