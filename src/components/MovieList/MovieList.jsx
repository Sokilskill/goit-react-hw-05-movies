import React from 'react';
import { Link } from 'react-router-dom';
import { List, Li, WrapperImage, Title, Content } from './MovieList.style';

const MovieList = ({ dataList }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <List>
      {dataList.map(({ id, title, poster_path }) => (
        <Li key={id}>
          <Link to={`/movies/${id}`}>
            <WrapperImage>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200${poster_path}`
                    : defaultImg
                }
                alt={title}
                width="100%"
                height="250"
              />
            </WrapperImage>
          </Link>

          <Content>
            <Link to={`/movies/${id}`} title={title}>
              <Title>{title}</Title>
            </Link>
          </Content>
        </Li>
      ))}
    </List>
  );
};

export default MovieList;
