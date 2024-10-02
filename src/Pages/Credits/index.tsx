import {
  CreditsWrapper,
  IconCredit,
  MadeBy,
  MadeByWrapper,
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

interface CreditsProps {
  onClick: () => void;
  displayState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Credits = (props: CreditsProps) => {
  const [show] = props.displayState;
  return (
    <StyledWrapper>
      <TopArrow $show={show} onClick={props.onClick} />
      <CreditsWrapper>
        <IconCredit>
          <Code height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/code"
            title="code icônes"
          >
            Code icônes créées par KP Arts - Flaticon
          </StyledLink>
        </IconCredit>
        <IconCredit>
          <About height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/utilisateur"
            title="utilisateur icônes"
          >
            Utilisateur icônes créées par Freepik - Flaticon
          </StyledLink>
        </IconCredit>
        <IconCredit>
          <Contact height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/contact"
            title="contact icônes"
          >
            Contact icônes créées par Smashicons - Flaticon
          </StyledLink>
        </IconCredit>
        <IconCredit>
          <Resume height="2em" width="2em" />
          <StyledLink
            to="https://www.flaticon.com/fr/icones-gratuites/document"
            title="document icônes"
          >
            Document icônes créées par Freepik - Flaticon
          </StyledLink>
        </IconCredit>
      </CreditsWrapper>

      <MadeByWrapper>
        <MadeBy>Made with ❤️ by Cyril de Lajudie </MadeBy>
        <UsingText>
          Using{' '}
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
