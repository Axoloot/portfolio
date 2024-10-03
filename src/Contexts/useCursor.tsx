import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  ReactElement,
} from 'react';
import useWindowDimensions from '../misc/dimension';
import { Position } from '../misc/types';
import pointer from '../misc/mouseIcon';

interface CursorContextFn {
  pos: Position;
  setPos: React.Dispatch<React.SetStateAction<Position>>;
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  cursorImg: string;
  setCursorImg: React.Dispatch<React.SetStateAction<string>>;
  click: () => () => void;
  homeCursor: () => void;
  displayState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  drawerRef: React.MutableRefObject<HTMLDivElement | undefined>;
  initial: {
    x: number;
    y: number;
  };
}

const CursorContext = createContext<CursorContextFn>({} as CursorContextFn);

export const CursorProvider = ({ children }: { children: ReactElement }) => {
  const { height, width, isMobile } = useWindowDimensions();
  const initial = useMemo(
    () =>
      isMobile ? { x: width - 30, y: height - 40 } : { x: 70, y: height - 30 },
    [height, isMobile, width]
  );
  const [pos, setPos] = useState<Position>(initial);
  const [hidden, setHidden] = useState(false);
  const drawerRef = useRef<HTMLDivElement>();
  const [cursorImg, setCursorImg] = useState(pointer['cursor']);
  const displayState = useState(false);

  const click = useCallback(() => {
    setCursorImg(pointer['pointer']);
    const timeout = setTimeout(() => setCursorImg(pointer['cursor']), 1500);

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
        displayState,
        drawerRef,
        initial,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the context
export const useCursor = () => useContext(CursorContext);
