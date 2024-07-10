import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';

import utilisateur from '../../Images/utilisateur.png';
import carriere from '../../Images/carriere.png';
import contact from '../../Images/contact.png';
import techno from '../../Images/techno.png';
import resume from '../../Images/resume.png';
import {
  DrawerItem,
  DrawerItemIcon,
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

const Drawer = ({ children, minified }: DrawerProps) => {
  const { height } = useWindowDimensions();
  const [pos, setPos] = useState<Position>({ x: 70, y: height - 30 });
  const [hidden, setHidden] = useState(true);
  const drawerRef = useRef<HTMLDivElement>();

  (window as any).setPos = setPos;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(false);
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  const homeCursor = () => {
    const rect = drawerRef.current?.getBoundingClientRect();
    if (rect) setPos({ y: height - 30, x: rect.width / 2 });
  };

  useEffect(() => {
    homeCursor();
  }, [children, height]);

  const childrenWithProps = cloneElement(children, {
    setPos,
    homeCursor,
    setHidden,
  });

  return (
    <DrawerWrapper>
      <StyledDrawer ref={el => (drawerRef.current = el!)}>
        <DrawerItem
          to="/"
          replace={true}
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'green' : 'black',
          })}
        >
          <DrawerItemIcon src={utilisateur} />
          <DrawerItemText minified={minified}>About</DrawerItemText>
        </DrawerItem>
        <DrawerItem
          to="/xp"
          replace={true}
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'green' : 'black',
          })}
        >
          <DrawerItemIcon src={carriere} />
          <DrawerItemText minified={minified}>Expériences</DrawerItemText>
        </DrawerItem>
        <DrawerItem
          to="/techno"
          replace={true}
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'green' : 'black',
          })}
        >
          <DrawerItemIcon src={techno} />
          <DrawerItemText minified={minified}>Technologies</DrawerItemText>
        </DrawerItem>
        <DrawerItem
          to="/contact"
          replace={true}
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'green' : 'black',
          })}
        >
          <DrawerItemIcon src={contact} />
          <DrawerItemText minified={minified}>Contact</DrawerItemText>
        </DrawerItem>
        <DrawerItem
          to="/cv"
          replace={true}
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'green' : 'black',
          })}
        >
          <DrawerItemIcon src={resume} />
          <DrawerItemText minified={minified}>Resume</DrawerItemText>
        </DrawerItem>
        <Cursor pos={pos} hidden={hidden} />
      </StyledDrawer>
      <div style={{ flex: 1, height: '100vh' }}>{childrenWithProps}</div>
    </DrawerWrapper>
  );
};

export default Drawer;
