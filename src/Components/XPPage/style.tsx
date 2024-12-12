import styled from 'styled-components';
import { device } from '../../misc/sizes';

export const Section = styled.div<{ $img: string }>`
  flex: 1 0 100svh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  scroll-snap-align: start;
  font-size: 2rem;
  color: white;
  flex-direction: column;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url('${({ $img }) => $img}');
  background-size: cover;
  position: relative;
  background-position: center;

  @media ${device.tablet} {
    justify-content: space-evenly;
  }
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

  @media ${device.tablet} {
    margin: 1em;
    font-size: 0.5em;
  }
`;

export const Duration = styled.div`
  @media ${device.tablet} {
    margin: 0;
    font-size: 0.5em;
  }
`;
