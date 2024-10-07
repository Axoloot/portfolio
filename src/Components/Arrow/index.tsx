import React from 'react';
import styled from 'styled-components';
import { device } from '../../misc/sizes';
import { generateNeumorphicCss } from '../../misc';
import { ReactComponent as Left } from '../../Static/icons/left-arrow-icon.svg';
import { ReactComponent as Right } from '../../Static/icons/right-arrow-icon.svg';

interface ArrowProps {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}

const StyledArrow = styled.div<{
  direction: 'prev' | 'next';
  $disabled: boolean;
}>`
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
  min-width: 1em;
  max-width: 1em;
  ${props =>
    generateNeumorphicCss(
      props.theme.primary,
      props.$disabled ? 'inset' : 'normal'
    )}
  @media ${device.tablet} {
    ${props =>
      props.direction === 'prev'
        ? 'margin-left: 0.5em;'
        : 'margin-right: 0.5em;'}
  }
  &:active {
    ${props => generateNeumorphicCss(props.theme.primary, 'inset')}
  }
`;

const Arrow: React.FC<ArrowProps> = ({ direction, disabled, onClick }) => {
  return (
    <StyledArrow direction={direction} onClick={onClick} $disabled={disabled}>
      {direction === 'prev' ? (
        <Left style={{ margin: '.1em' }} />
      ) : (
        <Right style={{ margin: '.1em' }} />
      )}
    </StyledArrow>
  );
};

export default Arrow;
