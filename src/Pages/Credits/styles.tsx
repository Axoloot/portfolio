import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const MadeByWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
`;

export const MadeBy = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

export const UsingText = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin: 1em 0;
`;

export const IconCredit = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.secondary};
  fill: ${props => props.theme.secondary};
  margin-left: 1em;

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.tertiary};
    fill: ${props => props.theme.tertiary};
  }
`;

export const TopArrow = styled.button<{ $show?: boolean }>`
  margin: 0 !important;
  padding: 0 !important;
  background: ${props => props.theme.secondary};
  height: ${props => (props.$show ? '50px' : '0px')};
  width: ${props => (props.$show ? '50px' : '0px')};
  overflow: hidden;
  border-radius: 50px;
  color: transparent;
  clear: both;
  visibility: ${props => (props.$show ? 'visible' : 'hidden')};
  position: fixed;
  cursor: pointer;
  display: block;
  border: none;
  left: 1em;
  top: 1em;
  font-size: 1em;
  outline: 0 !important;
  z-index: 99;
  transition: all 0.3s ease-in-out;
  box-shadow: ${props =>
    props.$show ? '0px 2px 4px 1px rgba(0, 0, 0, 0.25)' : 'none'};

  &:hover,
  &:active,
  &:focus {
    outline: 0 !important;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    vertical-align: middle;
    border-bottom: solid 10px ${props => props.theme.tertiary};
    border-left: solid 10px transparent;
    line-height: 0;
    border-right: solid 10px transparent;
    height: 0;
    margin: 18px auto 0;
    width: 0;
    border-radius: 20px;
    visibility: hidden;
  }

  ${props =>
    props.$show &&
    `
    &::before,
    &::after {
      visibility: visible;
    }

    &::after {
      border-bottom-color: #fff;
      position: relative;
      top: -24px;
    }
  `}
`;

export const CreditsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1em;
`;

export const TechLink = styled(NavLink)`
  text-decoration: underline;
  color: ${props => props.theme.tertiary};
`;
