import { ReactElement, useEffect, useRef } from 'react';

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
import useWindowDimensions from '../../misc/dimension';

import Credits from '../../Pages/Credits';
import Cursor from '../Cursor';
import { useCursor } from '../../Contexts/useCursor';

interface DrawerProps {
  minified?: boolean;
  children: ReactElement;
}

const Drawer = ({ children, minified }: DrawerProps) => {
  const creditsRef = useRef<HTMLDivElement>(null);
  const { height, isMobile } = useWindowDimensions();
  const { displayState, homeCursor, drawerRef } = useCursor();

  useEffect(() => {
    homeCursor();
  }, [children, height, homeCursor]);

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
          />
        </StyledDrawer>
        <StyledChild>{children}</StyledChild>
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
