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
import useWindowDimensions from '../misc/dimension';
import { Position } from '../misc/types';
import pointer from '../misc/mouseIcon';
import { TargetAndTransition, Transition } from 'framer-motion';

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
  visibleCredits: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  drawerRef: React.MutableRefObject<HTMLDivElement | undefined>;
  initial: {
    x: number;
    y: number;
  };
  animation: AnimationTransition | null;
}

const CursorContext = createContext<CursorContextFn>({} as CursorContextFn);

const pulsing: AnimationTransition = {
  animation: {
    scale: [1, 1.1, 1],
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
    duration: 0.5,
    ease: 'backOut',
  },
};

export const CursorProvider = ({ children }: { children: ReactElement }) => {
  const { height, width, isMobile } = useWindowDimensions();
  const initial = useMemo(
    () =>
      isMobile ? { x: width - 30, y: height - 40 } : { x: 70, y: height - 30 },
    [height, isMobile, width]
  );
  const [pos, setPos] = useState<Position>(initial);
  const [hidden, setHidden] = useState(false);
  const [cursorImg, setCursorImg] = useState(pointer['cursor']);
  const [animation, setAnimation] = useState<AnimationTransition | null>(null);
  const drawerRef = useRef<HTMLDivElement>();
  const visibleCredits = useState(false);

  const click = useCallback(() => {
    setAnimation(clicking);
    const timeout = setTimeout(() => setAnimation(null), 1500);

    return () => clearTimeout(timeout);
  }, []);

  const homeCursor = useCallback(() => {
    if (isMobile) {
      setPos(initial);
      return;
    }
    const rect = drawerRef.current?.getBoundingClientRect();
    if (rect) setPos({ y: height - 30, x: rect.width / 2 - 8 });
  }, [initial, height, isMobile]);

  useEffect(() => {
    const intervale = setInterval(() => {
      setAnimation(pulsing);
      const timeout = setTimeout(() => setAnimation(null), 5000);
      return () => clearTimeout(timeout);
    }, 35000);
    return () => clearInterval(intervale);
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
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the context
export const useCursor = () => useContext(CursorContext);
