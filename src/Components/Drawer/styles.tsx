import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../misc/sizes';
import { generateNeumorphicCss } from '../../misc';

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    position: fixed;
  }
`;

export const StyledDrawer = styled.div`
  display: flex;
  flex-direction: column;
  ${props => generateNeumorphicCss(props.theme.primary, false, false, 1.5)}
  background: ${props => props.theme.primary};
  z-index: 1;

  @media ${device.tablet} {
    flex-direction: row;
    border-right: 0;
    justify-content: space-around;
  }
`;

export const DrawerItem = styled(NavLink)`
  padding: 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.secondary};
  fill: ${props => props.theme.secondary};

  &.active {
    font-weight: bold;
    color: ${props => props.theme.tertiary};
    fill: ${props => props.theme.tertiary};
  }

  @media ${device.tablet} {
    padding: 1em 0;
  }

  &:hover {
    color: ${props => props.theme.tertiary};
    fill: ${props => props.theme.tertiary};
  }
`;

export const DrawerItemIcon = styled.div`
  height: 2em;
  margin: 0 0.5em;
`;

export const DrawerItemText = styled.div<{ $minified?: boolean }>`
  ${props => (props.$minified ? 'display: none;' : '')}
  @media ${device.tablet} {
    display: none;
  }
  text-decoration: none;
`;

export const StyledChild = styled.div`
  flex: 1;
  overflow: hidden;
  height: 100svh;
  @media ${device.tablet} {
    height: auto;
  }
`;

export const MobileCursorWrapper = styled.div`
  margin-top: auto;
  border-top: 0.01em solid ${props => props.theme.tertiary};
  height: 3em;
  width: 5em;
  align-self: center;

  @media ${device.tablet} {
    margin: 1em 0;
    border-top: none;
    border-left: 0.01em solid ${props => props.theme.tertiary};
    width: 2em;
    height: 2em;
  }
`;
