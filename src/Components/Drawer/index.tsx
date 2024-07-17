import {
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ReactComponent as Career } from '../../Images/career.svg';
import { ReactComponent as About } from '../../Images/about.svg';
import { ReactComponent as Contact } from '../../Images/contact.svg';
import { ReactComponent as Resume } from '../../Images/resume.svg';
import { ReactComponent as Code } from '../../Images/code.svg';
import {
  DrawerItem,
  DrawerItemText,
  DrawerWrapper,
  MobileCursorWrapper,
  StyledChild,
  StyledDrawer,
} from './styles';
import Cursor from '../Cursor';
import { Position } from '../../misc/types';
import useWindowDimensions from '../../misc/dimension';
import pointer from '../Cursor/mouseIcon';

interface DrawerProps {
  minified?: boolean;
  children: ReactElement;
}

const Drawer = ({ children, minified }: DrawerProps) => {
  const { height, width, isMobile } = useWindowDimensions();
  const initial = useMemo(
    () =>
      isMobile ? { x: width - 30, y: height - 40 } : { x: 70, y: height - 30 },
    [height, isMobile, width]
  );
  const [pos, setPos] = useState<Position>(initial);
  const [hidden, setHidden] = useState(false);
  const drawerRef = useRef<HTMLDivElement>();
  const [cursorImg, setCursorImgFn] = useState(pointer['cursor']);

  const style = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'bold' : '',
    color: isActive ? 'green' : 'black',
    fill: isActive ? 'green' : 'black',
  });

  const click = useCallback(() => {
    setCursorImgFn(pointer['pointer']);
    const timeout = setTimeout(() => setCursorImgFn(pointer['cursor']), 1500);

    return () => clearTimeout(timeout);
  }, []);

  const homeCursor = useCallback(() => {
    setPos(initial);
  }, [initial]);

  useEffect(() => {
    homeCursor();
  }, [children, height, homeCursor]);

  const childrenWithProps = cloneElement(children, {
    setPos: useCallback(
      (pos: Position) => setTimeout(() => setPos(pos), 1),
      []
    ),
    homeCursor,
    setHidden,
    click,
    setCursorImg: useCallback((name: 'cursor' | 'pointer' | 'grabe') => {
      setCursorImgFn(name);
    }, []),
  });

  return (
    <DrawerWrapper>
      <StyledDrawer ref={el => (drawerRef.current = el!)}>
        <DrawerItem to="/" replace={true} style={style}>
          <About
            fill="inherit"
            height="2em"
            width="2em"
            style={{ margin: '0 0.5em' }}
          />
          <DrawerItemText minified={minified}>About</DrawerItemText>
        </DrawerItem>
        <DrawerItem to="/xp" replace={true} style={style}>
          <Career
            fill="inherit"
            height="2em"
            width="2em"
            style={{ margin: '0 0.5em' }}
          />
          <DrawerItemText minified={minified}>Expériences</DrawerItemText>
        </DrawerItem>
        <DrawerItem to="/techno" replace={true} style={style}>
          <Code
            fill="inherit"
            height="2em"
            width="2em"
            style={{ margin: '0 0.5em' }}
          />
          <DrawerItemText minified={minified}>Technologies</DrawerItemText>
        </DrawerItem>
        <DrawerItem to="/contact" replace={true} style={style}>
          <Contact
            fill="inherit"
            height="2em"
            width="2em"
            style={{ margin: '0 0.5em' }}
          />
          <DrawerItemText minified={minified}>Contact</DrawerItemText>
        </DrawerItem>
        <DrawerItem to="/cv" replace={true} style={style}>
          <Resume
            fill="inherit"
            height="2em"
            width="2em"
            style={{ margin: '0 0.5em' }}
          />
          <DrawerItemText minified={minified}>Resume</DrawerItemText>
        </DrawerItem>
        <MobileCursorWrapper />
        <Cursor
          initial={initial}
          pos={pos}
          hidden={hidden}
          cursorImg={cursorImg}
        />
      </StyledDrawer>
      <StyledChild>{childrenWithProps}</StyledChild>
    </DrawerWrapper>
  );
};

export default Drawer;
