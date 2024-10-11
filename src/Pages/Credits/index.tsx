import { useTranslation } from 'react-i18next';

import {
  CreditsWrapper,
  IconCredit,
  MadeBy,
  MadeByWrapper,
  ResetAnimWrapper,
  ResetButton,
  StyledLink,
  StyledWrapper,
  TechLink,
  TopArrow,
  UsingText,
} from './styles';
import { ReactComponent as About } from '../../Static/icons/about.svg';
import { ReactComponent as Contact } from '../../Static/icons/contact.svg';
import { ReactComponent as Resume } from '../../Static/icons/resume.svg';
import { ReactComponent as Code } from '../../Static/icons/code.svg';
import LangSwitcher from '../../Components/LangSwitcher';

interface CreditsProps {
  onClick: () => void;
  visible: boolean;
  reset: () => void;
}

const Credits = (props: CreditsProps) => {
  const { t } = useTranslation();

  if (!props.visible) return <></>;
  return (
    <StyledWrapper>
      <TopArrow $show={props.visible} onClick={props.onClick} />
      <CreditsWrapper>
        <IconCredit>
          <Code height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/code"
            title="code icônes"
          >
            {t('credits.code')}
          </StyledLink>
        </IconCredit>
        <IconCredit>
          <About height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/utilisateur"
            title="utilisateur icônes"
          >
            {t('credits.about')}
          </StyledLink>
        </IconCredit>
        <IconCredit>
          <Contact height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/contact"
            title="contact icônes"
          >
            {t('credits.contact')}
          </StyledLink>
        </IconCredit>
        <IconCredit>
          <Resume height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/document"
            title="document icônes"
          >
            {t('credits.resume')}
          </StyledLink>
        </IconCredit>
      </CreditsWrapper>

      <ResetAnimWrapper>
        <LangSwitcher cb={props.reset} />
        <ResetButton onClick={props.reset}>{t('credits.reset')}</ResetButton>
      </ResetAnimWrapper>

      <MadeByWrapper>
        <MadeBy>{t('contact.madeby')}</MadeBy>
        <UsingText>
          {t('contact.using')}{' '}
          <TechLink
            to="https://fr.react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </TechLink>
          ,
          <TechLink
            to="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </TechLink>
          ,{' '}
          <TechLink
            to="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled-components
          </TechLink>
          ,{' '}
          <TechLink
            to="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer-motion
          </TechLink>
        </UsingText>
      </MadeByWrapper>
    </StyledWrapper>
  );
};

export default Credits;
