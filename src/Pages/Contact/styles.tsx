import styled from 'styled-components';
import { generateNeumorphicCss } from '../../misc';

export const ContactWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const NameWrapper = styled.div`
  flex-direction: row;
  width: fit-content;
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  margin: 1em;
  padding: 1em;
  color: ${props => props.theme.secondary};
  flex: auto;
  border: none;
  ${props => generateNeumorphicCss(props.theme.primary, 'inset', true)}
`;

export const InputText = styled.textarea`
  margin: 1em;
  color: ${props => props.theme.secondary};
  padding: 1em;
  height: 15em;
  border: none;
  ${props => generateNeumorphicCss(props.theme.primary)}
`;

export const MediasWrapper = styled.div`
  display: flex;
  ${props => generateNeumorphicCss(props.theme.primary, 'normal', true)}
  padding: 1em;
`;

export const MediaIcon = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin: 0 1em;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  width: 15em;
  align-self: end;
  align-content: end;
  display: flex;
  border: none;
  margin: 0 1em;
  padding: 1em;
  border: none;
  border-radius: 1em;
  color: ${props => props.theme.secondary};
  ${props => generateNeumorphicCss(props.theme.primary, 'normal', true)}

  &:active {
    ${props => generateNeumorphicCss(props.theme.primary, 'inset', true)}
  }
`;
