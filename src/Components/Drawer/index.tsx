import {
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
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
  StyledDrawer,
} from './styles';
import Cursor from '../Cursor';
import { Position } from '../../misc/types';
import useWindowDimensions from '../../misc/dimension';

interface DrawerProps {
  minified?: boolean;
  children: ReactElement;
}
const pointer =
  'https://images.vexels.com/content/131773/preview/pixilated-hand-cursor-1-df1065.png';
const cursor =
  'https://www.freeiconspng.com/thumbs/cursor-png/download-big-image-png-medium-image-png-small-image-png-microsoft--15.png';

const Drawer = ({ children, minified }: DrawerProps) => {
  const { height } = useWindowDimensions();
  const [pos, setPos] = useState<Position>({ x: 70, y: height - 30 });
  const [hidden, setHidden] = useState(false);
  const drawerRef = useRef<HTMLDivElement>();
  const [cursorImg, setCursorImg] = useState(cursor);

  const style = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'bold' : '',
    color: isActive ? 'green' : 'black',
    fill: isActive ? 'green' : 'black',
  });

  const click = useCallback(() => {
    setCursorImg(pointer);
    const timeout = setTimeout(() => setCursorImg(cursor), 1500);

    return () => clearTimeout(timeout);
  }, []);

  const homeCursor = useCallback(() => {
    const rect = drawerRef.current?.getBoundingClientRect();
    if (rect) setPos({ y: height - 30, x: rect.width / 2 });
  }, [height]);

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
        <Cursor pos={pos} hidden={hidden} cursorImg={cursorImg} />
      </StyledDrawer>
      <div style={{ flex: 1, height: '100vh' }}>{childrenWithProps}</div>
    </DrawerWrapper>
  );
};

export default Drawer;
