import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: var(--tmdbDarkBlue);

  ul {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  li {
    padding: 20px 0;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

//
