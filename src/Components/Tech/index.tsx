import Rating from '../Rating';
import { LoremIpsum } from 'lorem-ipsum';
import {
  ActiveContent,
  FullTechWrapper,
  TechLogo,
  TechName,
  TechWrapper,
} from './styles';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

interface TechElem {
  name: string;
  logo: string;
  type: string;
  rating: number;
  description: string;
}

interface TechProps {
  active: boolean;
  element: TechElem;
}

const Tech = ({ element, active }: TechProps) => {
  return (
    <FullTechWrapper>
      <TechWrapper>
        <TechLogo src={element.logo} />
        <TechName>{element.name}</TechName>
        {active && <Rating rate={element.rating} />}
      </TechWrapper>
      {active && <ActiveContent>{lorem.generateSentences(1)}</ActiveContent>}
    </FullTechWrapper>
  );
};

export default Tech;
