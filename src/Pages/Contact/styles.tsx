import styled from 'styled-components';

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
  flex: auto;
`;

export const InputText = styled.textarea`
  margin: 1em;
  padding: 1em;
  height: 15em;
`;

export const MediasWrapper = styled.div`
  display: flex;
  border-top: solid gray 0.1em;
  padding-top: 1em;
`;

export const MediaIcon = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin: 0 1em;
  border-radius: 5px;
`;

export const SubmitButton = styled.button``;
