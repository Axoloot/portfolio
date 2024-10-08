import styled from 'styled-components';
import { device } from '../../misc/sizes';
import { motion } from 'framer-motion';

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;

  @media ${device.tablet} {
    overflow: scroll;
  }
`;

export const TechWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;
