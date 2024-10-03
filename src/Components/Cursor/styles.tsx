import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../misc/sizes';

export const CursorImg = styled.img`
  width: 1em;
`;

export const CursorPosition = styled(motion.div)<{ hidden?: boolean }>`
  ${props => (props.hidden ? 'display: none;' : '')}
  position: absolute;
  @media ${device.tablet} {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const CursorAnimation = styled(motion.div)``;
