import styled, { keyframes } from 'styled-components';
import { device } from '../../misc/sizes';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  whitespace: pre-wrap;
  justify-content: space-evenly;
`;

export const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Cursor = styled.span`
  font-weight: bold;
  font-size: 1em;
  margin-left: 5px;
  color: ${props => props.theme.secondary};
  animation: ${blink} 1s infinite;
`;

export const TextContainer = styled.div`
  text-align: center;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    font-size: 1em;
    position: fixed;
  }
  font-size: 1.5em;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
`;

export const DescriptionContainer = styled.div`
  justify-self: end;
  text-align: center;
  width: 100%;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Dot = styled.span<{ active: boolean }>`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? '#000' : '#ccc')};
  border-radius: 50%;
  display: inline-block;
`;
