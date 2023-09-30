import React from 'react';
import { Link } from 'react-router-dom';
import { List, Li, WrapperImage, Title, Content } from './MovieList.style';

const MovieList = ({ dataList }) => {
  return (
    <List>
      {dataList.map(movie => (
        <Li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <WrapperImage>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                width="100%"
                height="250"
              />
            </WrapperImage>
          </Link>

          <Content>
            <Link to={`/movies/${movie.id}`} title={movie.title}>
              <Title>{movie.title}</Title>
            </Link>
          </Content>
        </Li>
      ))}
    </List>
  );
};

export default MovieList;
