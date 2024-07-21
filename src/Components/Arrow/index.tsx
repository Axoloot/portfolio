import React from 'react';
import styled from 'styled-components';
import { device } from '../../misc/sizes';
import { generateNeumorphicCss } from '../../misc';

interface ArrowProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const StyledArrow = styled.div<{ direction: 'prev' | 'next' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 2em;
  ${props =>
    props.direction === 'prev' ? 'margin-left: 1em;' : 'margin-right: 1em;'}
  color: ${props => props.theme.secondary};
  height: 3em;
  width: 1em;
  ${props => generateNeumorphicCss(props.theme.primary)}
  @media ${device.tablet} {
    ${props =>
      props.direction === 'prev'
        ? 'margin-left: 0.5em;'
        : 'margin-right: 0.5em;'}
  }
`;

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <StyledArrow direction={direction} onClick={onClick}>
      {direction === 'prev' ? '\u2B05' : '\u27A1'}
    </StyledArrow>
  );
};

export default Arrow;
