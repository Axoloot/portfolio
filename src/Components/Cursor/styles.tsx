import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CursorImg = styled.img`
  width: 1em;
`;

export const CursorWrapper = styled(motion.div)<{ hidden?: boolean }>`
  ${props => (props.hidden ? 'display: none;' : '')}
  position: absolute;
`;
