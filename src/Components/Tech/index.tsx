import styled from 'styled-components';
import techs from './techs';

const TechWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0.5em 0.3em;
`;

const TechLogo = styled.img`
  width: 5em;
  height: 5em;
`;

const TechName = styled.div`
  text-align: center;
  &&::first-letter {
    text-transform: capitalize;
  }
`;

interface TechProps {
  name: string;
}

const Tech = ({ name }: TechProps) => {
  const element = techs.find(e => e.name === name);
  return (
    <TechWrapper>
      <TechLogo src={element?.logo} />
      <TechName>{element?.name}</TechName>
    </TechWrapper>
  );
};

export default Tech;
