import styled from 'styled-components';

const TechWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0.5em 0.3em;
`;

const TechLogo = styled.img`
  height: 5em;
`;

const TechName = styled.div`
  text-align: center;
  &&::first-letter {
    text-transform: capitalize;
  }
`;

const techs = [
  {
    name: 'react',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
];

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
