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
        {active && <Rating rate={element.rating} />}
      </TechWrapper>
      <ActiveContent></ActiveContent>
    </FullTechWrapper>
  );
};

export default Tech;
