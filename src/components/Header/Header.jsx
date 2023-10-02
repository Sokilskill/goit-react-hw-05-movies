import React from 'react';
import { Link, Header } from './Header.style';

const HeaderComponent = () => {
  return (
    <Header>
      <div className="container">
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
      </div>
    </Header>
  );
};

export default HeaderComponent;
