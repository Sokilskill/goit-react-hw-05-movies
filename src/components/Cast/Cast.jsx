import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { options } from 'serviceApi/themoviedbApi';
import { Character, Li, List, Name } from './Cast.style';

const Cast = () => {
  const [castList, setCastList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log('RESP', response.cast);
        setCastList(response.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <List>
        {castList &&
          castList.map(({ id, profile_path, name, character }) => (
            <Li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`}
                alt={name}
                width="138"
              />
              <Name>{name}</Name>
              <Character>{character ? character : 'no info'}</Character>
            </Li>
          ))}
      </List>
    </>
  );
};

export default Cast;
