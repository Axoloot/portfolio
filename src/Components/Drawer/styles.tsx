import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDrawer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 0.1em solid;
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
  text-decoration: none;

  &:hover {
    color: green;
  }
`;
