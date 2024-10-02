import {
  cloneElement,
  lazy,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ReactComponent as Career } from '../../Static/icons/career.svg';
import { ReactComponent as About } from '../../Static/icons/about.svg';
import { ReactComponent as Contact } from '../../Static/icons/contact.svg';
import { ReactComponent as Resume } from '../../Static/icons/resume.svg';
import { ReactComponent as Code } from '../../Static/icons/code.svg';
import {
  DrawerItem,
  DrawerItemText,
  MobileCursorWrapper,
  PageWrapper,
  StyledChild,
  StyledDrawer,
} from './styles';
import { Position } from '../../misc/types';
import useWindowDimensions from '../../misc/dimension';
import pointer from '../../misc/mouseIcon';

const Credits = lazy(() => import('../../Pages/Credits'));
const Cursor = lazy(() => import('../Cursor'));

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
    setCursorImg: useCallback((name: 'cursor' | 'pointer' | 'drag') => {
      setCursorImgFn(name);
    }, []),
  });

  return (
    <>
      <PageWrapper>
        <StyledDrawer ref={el => (drawerRef.current = el!)}>
          <DrawerItem to="/" replace={true} aria-label="About">
            <About
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>About</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/career" replace={true} aria-label="Career">
            <Career
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Career</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/techno" replace={true} aria-label="Techno">
            <Code
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Technologies</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/cv" replace={true} aria-label="cv">
            <Resume
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Resume</DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/contact" replace={true} aria-label="contact">
            <Contact
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>Contact</DrawerItemText>
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
      </PageWrapper>
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
