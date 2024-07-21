import {
  CreditsWrapper,
  IconCredit,
  MadeBy,
  StyledLink,
  StyledWrapper,
  TechLink,
  TopArrow,
} from './styles';

import { ReactComponent as About } from '../../Images/about.svg';
import { ReactComponent as Contact } from '../../Images/contact.svg';
import { ReactComponent as Resume } from '../../Images/resume.svg';
import { ReactComponent as Code } from '../../Images/code.svg';

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

      <MadeBy>
        <h1>Made with ❤️ by Cyril de Lajudie </h1>
        <h4>
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
        </h4>
      </MadeBy>
    </StyledWrapper>
  );
};

export default Credits;
