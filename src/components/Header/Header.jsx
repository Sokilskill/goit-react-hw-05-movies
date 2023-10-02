import React from 'react';
import { Link, Header } from './Header.style';
import { Container } from 'components/App.styled';

const HeaderComponent = () => {
  return (
    <Header>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
