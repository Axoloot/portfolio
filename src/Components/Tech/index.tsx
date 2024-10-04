import Rating from '../Rating';
import { LoremIpsum } from 'lorem-ipsum';
import {
  ActiveContent,
  FullTechWrapper,
  TechLogo,
  TechName,
  TechWrapper,
} from './styles';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../misc/dimension';

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

const TechDescription = ({
  active,
  opacity,
}: {
  active: boolean;
  opacity: number;
}) => {
  if (active)
    return (
      <ActiveContent initial={{ opacity: 0 }} animate={{ opacity }}>
        {lorem.generateSentences(1)}
      </ActiveContent>
    );
  return <></>;
};

const Tech = ({ element, active }: TechProps) => {
  const [opacity, setOpacity] = useState(0);
  const { isMobile } = useWindowDimensions();

  useEffect(() => {
    if (!active) return setOpacity(0);
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 500);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <FullTechWrapper>
      <TechWrapper>
        <TechLogo src={element.logo} alt={element.name} />
        <TechName>{element.name}</TechName>
        {active && <Rating rate={element.rating} />}
        <TechDescription active={active && isMobile} opacity={opacity} />
      </TechWrapper>
      <TechDescription active={active && !isMobile} opacity={opacity} />
    </FullTechWrapper>
  );
};

export default Tech;
