import React from 'react';
import { Header, Link } from './Header.style';

const HeaderComponent = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
    </Header>
  );
};

export default HeaderComponent;
