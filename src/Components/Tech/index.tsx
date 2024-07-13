import Rating from '../Rating';
import {
  ActiveContent,
  FullTechWrapper,
  TechLogo,
  TechName,
  TechWrapper,
} from './styles';

interface Tech {
  name: string;
  logo: string;
  type: string;
  rating: number;
}

interface TechProps {
  active: boolean;
  element: Tech;
}

const Tech = ({ element, active }: TechProps) => {
  return (
    <FullTechWrapper>
      <TechWrapper>
        <TechLogo src={element.logo} />
        <TechName>{element.name}</TechName>
      </TechWrapper>
      {active && (
        <ActiveContent>
          <Rating rate={element.rating} />
        </ActiveContent>
      )}
    </FullTechWrapper>
  );
};

export default Tech;
