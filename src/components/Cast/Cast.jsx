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
        console.log('RESP', response.cast);
        setCastList(response.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <List>
        {castList &&
          castList.map(({ id, profile_path, name, character }) => (
            <Li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="138"
                height={175}
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
