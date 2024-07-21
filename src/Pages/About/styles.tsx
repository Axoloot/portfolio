import styled, { keyframes } from 'styled-components';
import { device } from '../../misc/sizes';
import { motion } from 'framer-motion';
import { generateNeumorphicCss } from '../../misc';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  whitespace: pre-wrap;
  justify-content: center;
  position: relative;
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
  font-size: 1.5em;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  @media ${device.tablet} {
    font-size: 1em;
  }
`;

export const DescriptionContainer = styled(motion.div)`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 2em;
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

export const Dot = styled.span<{ $active: boolean }>`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  ${props => generateNeumorphicCss(props.theme.primary, true, props.$active)}
`;
