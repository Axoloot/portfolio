import React from 'react';
import styled from 'styled-components';

interface ArrowProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <StyledArrow direction={direction} onClick={onClick}>
      {direction === 'prev' ? '<' : '>'}
    </StyledArrow>
  );
};

const StyledArrow = styled.div<{ direction: 'prev' | 'next' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-size: 2em;
  color: ${props => props.theme.secondary};
  &:hover {
    background-color: #bbb;
  }
`;

export default Arrow;
