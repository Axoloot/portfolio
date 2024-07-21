import React from 'react';
import styled from 'styled-components';

interface RatingProps {
  rate: number;
}

const Rating: React.FC<RatingProps> = ({ rate }) => {
  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star key={index} $filled={ratingValue <= rate}>
            &#9733;
          </Star>
        );
      })}
    </StarContainer>
  );
};

export default Rating;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 1em;
`;

const Star = styled.span<{ $filled: boolean }>`
  font-size: 1.5em;
  color: ${({ $filled }) => ($filled ? '#FFD700' : '#e4e5e9')};
  transition: color 0.2s;
`;
