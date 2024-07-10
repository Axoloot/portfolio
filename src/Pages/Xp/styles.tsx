import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Section = styled.div`
  flex: 1 0 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  font-size: 2rem;
  color: white;

  &:nth-child(odd) {
    background-color: #333;
  }

  &:nth-child(even) {
    background-color: #666;
  }
`;

export const Timeline = styled.div<{ sectionNb: number }>`
  width: 6em;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  margin: 1em;
`;

export const TimelineDot = styled(motion.div)<{
  active?: boolean;
  hide?: boolean;
  event?: boolean;
}>`
  ${props => (props.hide ? 'opacity: 0;' : '')}
  ${props => (props.event ? 'border-radius: 50%;' : '')}
  ${props => (!props.event ? 'align-self: center;' : '')}
  width: 1.3em;
  height: ${props => (props.event ? '1.3em' : '.3em')};
  background-color: ${props => (props.active ? 'blue' : 'gray')};
  transition: background-color 0.3s ease;
  z-index: 1;
  position: absolute;
  left: 1em;
`;

export const TimelineText = styled.div`
  margin: 0 0 0 2.5em;
`;

export const Line = styled(motion.div)<{ red?: boolean }>`
  ${props => (props.red ? 'background: grey;' : 'background: green;')}
  ${props => (props.red ? 'height: 100vh;' : 'height: 0;')}
  width: .4em;
  position: absolute;
  z-index: 0;
  left: 1.45em;
`;
