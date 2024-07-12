import styled from 'styled-components';
import techs from './techs';

const FullTechWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TechWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0.5em 0.3em;
`;

const ActiveContent = styled.div`
  text-align: center;
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
  active: boolean;
}

const Tech = ({ name, active }: TechProps) => {
  const element = techs.find(e => e.name === name);
  return (
    <FullTechWrapper>
      <TechWrapper>
        <TechLogo src={element?.logo} />
        <TechName>{element?.name}</TechName>
      </TechWrapper>
      {active && <ActiveContent>Texts</ActiveContent>}
    </FullTechWrapper>
  );
};

export default Tech;
