import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../misc/sizes';
import { generateNeumorphicCss } from '../../misc';

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

export const Timeline = styled.div<{ sectionNb: number }>`
  width: 6em;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${props => generateNeumorphicCss(props.theme.primary, false)};
  @media ${device.tablet} {
    width: 3em;
  }
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
  background-color: ${props => (props.active ? props.theme.tertiary : 'grey')};
  transition: background-color 0.3s ease;
  z-index: 1;
  position: absolute;
  left: 1em;
  @media ${device.tablet} {
    left: auto;
  }
`;

export const TimelineText = styled.div`
  margin: 0 0 0 2.5em;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Line = styled(motion.div)<{ full?: boolean }>`
  ${props =>
    props.full ? 'background: grey;' : `background: ${props.theme.tertiary};`}
  ${props => (props.full ? 'height: 100%;' : 'height: 0;')}
  width: .4em;
  position: absolute;
  z-index: 0;
  left: 1.45em;
  @media ${device.tablet} {
    left: auto;
  }
`;
