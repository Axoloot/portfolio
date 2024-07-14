import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Section = styled.div<{ img: string }>`
  flex: 1 0 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  font-size: 2rem;
  color: white;
  flex-direction: column;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(127, 127, 127, 0.4)
    ),
    url('${({ img }) => img}');
  background-size: cover;
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
  cursor: pointer;
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
  flex: 1 0 100vh;

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
  ${props => (props.red ? 'height: 100%;' : 'height: 0;')}
  width: .4em;
  position: absolute;
  z-index: 0;
  left: 1.45em;
`;

export const Text = styled.div``;

export const Desc = styled.div`
  text-align: center;
`;
