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
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../LangSwitcher';

interface DrawerProps {
  minified?: boolean;
  children: ReactElement;
  reset: () => void;
}

const Drawer = ({ children, minified, reset }: DrawerProps) => {
  const { t } = useTranslation();
  const creditsRef = useRef<HTMLDivElement>(null);
  const { height } = useWindowDimensions();
  const { visibleCredits, homeCursor, drawerRef } = useCursor();
  const [visible, setVisible] = visibleCredits;

  useEffect(() => {
    homeCursor();
  }, [children, height, homeCursor]);

  useEffect(() => {
    if (window.screenY !== 0 && !visible)
      window.scrollTo({
        top: 0,
      });
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
            <DrawerItemText $minified={minified}>
              {t('drawer.about')}
            </DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/career" replace={true} aria-label="Career">
            <Career
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>
              {t('drawer.career')}
            </DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/techno" replace={true} aria-label="Techno">
            <Code
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>
              {t('drawer.technologies')}
            </DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/cv" replace={true} aria-label="cv">
            <Resume
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>
              {t('drawer.resume')}
            </DrawerItemText>
          </DrawerItem>
          <DrawerItem to="/contact" replace={true} aria-label="contact">
            <Contact
              fill="inherit"
              height="2em"
              width="2em"
              style={{ margin: '0 0.5em' }}
            />
            <DrawerItemText $minified={minified}>
              {t('drawer.contact')}
            </DrawerItemText>
          </DrawerItem>
          <MobileCursorWrapper />
          <Cursor
            onClick={() => {
              setVisible(true);
              creditsRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
              });
            }}
          />
          <LangSwitcher cb={reset} />
        </StyledDrawer>
        <StyledChild>{children}</StyledChild>
      </PageWrapper>
      <StyledChild ref={creditsRef}>
        <Credits
          visible={visible}
          onClick={() => {
            window.scrollTo({
              behavior: 'smooth',
              top: 0,
            });
            setVisible(false);
          }}
          reset={() => {
            reset();
            setVisible(false);
          }}
        />
      </StyledChild>
    </>
  );
};

export default Drawer;
