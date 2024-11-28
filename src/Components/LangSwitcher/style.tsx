import styled from 'styled-components';
import { device } from '../../misc/sizes';

export const LangSwitcherContainer = styled.div`
  position: absolute;
  bottom: 0;
  @media ${device.tablet} {
    right: 0;
  }
  @media ${device.desktop} {
    left: 0;
  }
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled.select`
  appearance: none;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  background: transparent;
`;

export const StyledOption = styled.option`
  font-size: 1em;
`;
