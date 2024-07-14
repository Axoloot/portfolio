import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../misc/sizes';

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
  border-right: 0.1em solid;
  background: white;
  z-index: 1;

  @media ${device.tablet} {
    flex-direction: row;
    border-right: 0;
    border-top: 0.1em solid;
  }
`;

export const DrawerItem = styled(NavLink)`
  padding: 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const DrawerItemIcon = styled.div`
  height: 2em;
  margin: 0 0.5em;
`;

export const DrawerItemText = styled.div<{ minified?: boolean }>`
  ${props => (props.minified ? 'display: none;' : '')}
  @media ${device.tablet} {
    display: none;
  }
  text-decoration: none;

  &:hover {
    color: green;
  }
`;

export const StyledChild = styled.div`
  flex: 1;
  height: 100svh;
  @media ${device.tablet} {
    height: auto;
    overflow: scroll;
  }
`;
