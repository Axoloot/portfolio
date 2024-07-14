import styled, { keyframes } from 'styled-components';
import { device } from '../../misc/sizes';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  whitespace: pre-wrap;
  align-items: center;
  justify-content: center;
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
  color: black;
  animation: ${blink} 1s infinite;
`;

export const TextContainer = styled.div`
  text-align: center;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    font-size: 1em;
    position: fixed;
  }
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
`;
