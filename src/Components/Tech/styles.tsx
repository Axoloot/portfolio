import styled from 'styled-components';

export const FullTechWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0.5em 0.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActiveContent = styled.div`
  text-align: center;
`;

export const TechLogo = styled.img`
  object-fit: contain;
  height: 5em;
  width: 5em;
`;

export const TechName = styled.div`
  text-align: center;
  &&::first-letter {
    text-transform: capitalize;
  }
`;
