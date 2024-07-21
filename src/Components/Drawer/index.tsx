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
import pointer from '../../misc/mouseIcon';
import Credits from '../../Pages/Credits';

interface DrawerProps {
  minified?: boolean;
  children: ReactElement;
  passProps?: boolean;
}

const Drawer = ({ children, minified, passProps = true }: DrawerProps) => {
  const { height, width, isMobile } = useWindowDimensions();
  const initial = useMemo(
    () =>
      isMobile ? { x: width - 30, y: height - 40 } : { x: 70, y: height - 30 },
    [height, isMobile, width]
  );
  const [pos, setPos] = useState<Position>(initial);
  const [hidden, setHidden] = useState(false);
  const drawerRef = useRef<HTMLDivElement>();
  const creditsRef = useRef<HTMLDivElement>(null);
  const [cursorImg, setCursorImgFn] = useState(pointer['cursor']);
  const displayState = useState(false);

  const click = useCallback(() => {
    setCursorImgFn(pointer['pointer']);
    const timeout = setTimeout(() => setCursorImgFn(pointer['cursor']), 1500);

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
    <>
      <DrawerWrapper>
        <StyledDrawer ref={el => (drawerRef.current = el!)}>
          <DrawerItem to="/" replace={true}>
            <About
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>About</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/xp" replace={true}>
            <Career
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Career</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/techno" replace={true}>
            <Code
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Technologies</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/contact" replace={true}>
            <Contact
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Contact</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/cv" replace={true}>
            <Resume
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Resume</DrawerItemText>
          </DrawerItem>
          <MobileCursorWrapper />
          <Cursor
            onClick={() => {
              if (isMobile) return (window as any).cycleTheme();
              creditsRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
              });
              displayState[1](true);
            }}
            initial={initial}
            pos={pos}
            hidden={hidden}
            cursorImg={cursorImg}
          />
        </StyledDrawer>
        <StyledChild>{passProps ? childrenWithProps : children}</StyledChild>
      </DrawerWrapper>
      {!isMobile && (
        <StyledChild ref={creditsRef}>
          <Credits
            displayState={displayState}
            onClick={() => {
              window.scrollTo({
                behavior: 'smooth',
                top: 0,
              });
              displayState[1](false);
            }}
          />
        </StyledChild>
      )}
    </>
  );
};

export default Drawer;
