import styled from 'styled-components';

export const Section = styled.div<{ img: string }>`
  flex: 1 0 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  font-size: 2rem;
  color: white;
  flex-direction: column;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(127, 127, 127, 0.4)
    ),
    url('${({ img }) => img}');
  background-size: cover;
  position: relative;
`;

export const Year = styled.div`
  top: 1em;
  left: 1em;
  position: absolute;
`;

export const Company = styled.div`
  font-size: 1.5em;
`;

export const Description = styled.div`
  margin: 2em 7em;
  font-size: 0.7em;
  text-align: center;
`;

export const Duration = styled.div``;
