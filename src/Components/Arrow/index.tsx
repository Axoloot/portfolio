import React from 'react';
import styled from 'styled-components';
import { device } from '../../misc/sizes';
import { generateNeumorphicCss } from '../../misc';
import { ReactComponent as Left } from '../../Images/left-arrow-icon.svg';
import { ReactComponent as Right } from '../../Images/right-arrow-icon.svg';

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
  fill: ${props => props.theme.secondary};
  height: 3em;
  width: 1em;
  ${props => generateNeumorphicCss(props.theme.primary)}
  @media ${device.tablet} {
    ${props =>
      props.direction === 'prev'
        ? 'margin-left: 0.5em;'
        : 'margin-right: 0.5em;'}
  }
  &:active {
    ${props => generateNeumorphicCss(props.theme.primary, true, true)}
  }
`;

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <StyledArrow direction={direction} onClick={onClick}>
      {direction === 'prev' ? (
        <Left style={{ margin: '.1em' }} />
      ) : (
        <Right style={{ margin: '.1em' }} />
      )}
    </StyledArrow>
  );
};

export default Arrow;
