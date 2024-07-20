import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../misc/sizes';

export const TechCategories = styled(motion.div)<{
  color: string;
  active?: boolean;
  viewed?: boolean;
}>`
  flex-direction: ${({ active }) => (active ? 'column' : 'row')};
  border: solid 0.1em ${({ color }) => color};
  border-radius: 0.5em 0.5em 0;
  display: flex;
  position: relative;
  height: 320px;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 1em;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Grid = styled.div<{ active: boolean }>`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(
      ${({ active }) => (active ? 2 : 3)},
      1fr
    );

  @media ${device.tablet} {
    grid-template: repeat(3, 1fr) / repeat(
        ${({ active }) => (active ? 1 : 3)},
        1fr
      );
  }
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  height: 100%;
`;

export const TechCategoriesTitle = styled.div<{ color?: string }>`
  align-self: end;
  border-radius: 0.3em 0 0;
  background: ${({ color }) => color ?? 'red'};
  position: absolute;
  right: 0;
  bottom: 0;
`;
