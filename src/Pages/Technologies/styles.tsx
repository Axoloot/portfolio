import styled from 'styled-components';
import { device } from '../../misc/sizes';

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;

  @media ${device.tablet} {
    overflow: scroll;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* Start aligning items */
  gap: 1rem; /* Optional: spacing between items */
  width: 100%;
  height: 90%;
  flex-direction: row;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in IE/Edge */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in WebKit */
  }

  @media ${device.tablet} {
    flex-wrap: wrap;
    overflow-x: unset; /* Optional: Adjust for tablets */
  }
`;

export const Tree = styled.div`
  min-width: 100%;
  flex-shrink: 0; /* Prevent shrinking */
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  font-size: 2rem;
  color: white;
  flex-direction: column;
  padding: 1rem;
`;
