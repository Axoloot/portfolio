import styled from 'styled-components';
import { generateNeumorphicCss } from '../../misc';

export const LangSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled.select`
  appearance: none;
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  ${props => generateNeumorphicCss(props.theme.primary)}
`;

export const StyledOption = styled.option`
  font-size: 1em;
`;
